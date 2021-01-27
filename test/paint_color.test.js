const PaintColor = artifacts.require('PaintColor');

require('chai')
    .use(require('chai-as-promised'))
    .should();

contract('PainColor', ([deployer]) => {
    let contract;

    before(async () => {
        contract = await PaintColor.deployed();
    })

    describe('deployment', async () => {
        it('deployed successfully', async () => {
            const address = contract.address;
            assert.notEqual(address, '');
            assert.notEqual(address, 0x0);
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'PaintColor');
        })

        it('has a sybmol', async () => {
            const sybmol = await contract.symbol();
            assert.equal(sybmol, 'PNTCOLOR');
        })
    })
});