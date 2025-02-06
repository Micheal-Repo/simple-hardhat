const hre = require("hardhat");

async function main() {
    console.log("Deploying the contract...");

        // Get the contract factory
            const SimpleContract = await hre.ethers.getContractFactory("SimpleContract");

                // Deploy the contract with an initial message
                    const contract = await SimpleContract.deploy("Hello, Hardhat!");

                        await contract.deployed();

                            console.log(`Contract deployed at address: ${contract.address}`);

                                // Fetch the initial message
                                    let message = await contract.message();
                                        console.log(`Initial Message: ${message}`);

                                            // Update the message
                                                const tx = await contract.setMessage("Updated Message");
                                                    await tx.wait(); // Wait for transaction confirmation

                                                        // Fetch updated message
                                                            message = await contract.message();
                                                                console.log(`Updated Message: ${message}`);
                                                                }

                                                                // Run the script
                                                                main()
                                                                    .then(() => process.exit(0))
                                                                        .catch(error => {
                                                                                console.error(error);
                                                                                        process.exit(1);
                                                                                            });