import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalanceA =  stdlib.parseCurrency(1000);
const startingBalanceB =  stdlib.parseCurrency(20);

const runDapp = async (numBobs) => {
    const aliceAcc = await stdlib.newTestAccount(startingBalanceA);
    const aliceCtc = aliceAcc.contract(backend);
    const bobAccs = await stdlib.newTestAccounts(numBobs, startingBalanceB);
    // Bobs attach to the contract
    const bobCtcs = bobAccs.map(B => B.contract(backend, aliceCtc.getInfo()));
    const bobArray = [];
    bobAccs.map(B => bobArray.push(B.getAddress()))

    
    const fmt = (amt) => stdlib.formatCurrency(amt, 2)
    // creating a new token
    const supply = 1000;
    const name_ = "Josh";
    const unit = "JSH";
    const token_JSH = await stdlib.launchToken(aliceAcc,name_,unit,{ supply: supply});
    const JSH = token_JSH.id;
    const token = {name_, supply, unit, JSH};
    bobAccs.map(B => B.tokenAccept(JSH));

    // whitelist parameters
    const maxEntries = 5;
    const duration = 100;
    const whitelistParams = { maxEntries, duration };

    // print balance function
    const printBalances = async (nums) => {
        const printBalance = async (name, acc) => {
            const [balance, balance_JSH] = await stdlib.balancesOf(acc,[null, JSH]);
            console.log(`  [+] ${name} has ${fmt(balance)} ${stdlib.standardUnit} and ${balance_JSH} JSH `);
        } 
        await printBalance('Alice', aliceAcc);
        for (let i = 0; i < nums; i++) {
            await printBalance(`Bob #${i+1}`, bobAccs[i]);
        }
    }

    console.log(`\n\nRunning contract with ${numBobs} Bob accounts\n`);
    console.log("Starting balances:");
    await printBalances(numBobs);

    const whitelisted = [];
    let doneJ = false;
    const paidArray = [];
    let isPaying;

    // Bobs join the whitelist
    const startJoining = async () => {
        for(const [i,ctc] of bobCtcs.entries()){
            if( i < maxEntries) {
                try {
                    await ctc.apis.Bob.join();
                    //add the Bobs to an array
                    whitelisted.push(ctc);
                    console.log(` Bob Attacher #${whitelisted.length} joined`)
                } catch(e) {
                    console.log(` Bob Attacher #${i+1} cant join because whitelist period is over`);
                }
            } else {
                console.log(` Bob Attacher #${i+1} cant join because whitelist is full`);
            }
        }
        console.log("Balances after joining:");
        await printBalances(whitelisted.length);
        while(! doneJ) {
            await stdlib.wait(1);
        }
    }

    //Paying the Bobs
    const payment = async () => {
        if(whitelisted.length > 0){
            const ctc = whitelisted[whitelisted.length -1];
            try{
                await ctc.apis.Bob.receiveToken();
                
            } catch(e) {
                console.log(e)
            }
            paidArray.push(whitelisted.length);
            whitelisted.pop();
        }
        await stdlib.wait(2);
    }


    // launch Contract
    console.log(`Starting Whitelist...`)
    await aliceCtc.p.Alice({
    whitelistParams,
    token: () => {
        return token;
    },
    ready: () => {
        console.log(`*    Alice is ready to accept attachers     *`);
        console.log(`Bob Address Array:`)
        for(const bobAddress of bobArray){
            console.log(` [${bobAddress}] ,\n`);
        }
        startJoining();
    },
    seeJoin: (index, Address) => {
        console.log(` Creator saw that Bob Attacher #${index} joined with Address ${Address} `);
    },
    informTimeout: () => {
        console.log(`\n* Whitelist joining closed *\n`);
    },
    reward: () => {
        payment();
    },
    paying: () => {
        if(whitelisted.length > -1){
            isPaying = true
            return isPaying;
        } else {
            isPaying = false;
            return isPaying;
        }
    },
    showOutcome: () => {
        console.log("Balances after whitelist:");
        printBalances(paidArray.length);
    }
    })
    doneJ = true;
}

await runDapp(5);
await runDapp(3);
await runDapp(6);