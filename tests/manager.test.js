import Manager from '../lib/manager';

const manager = new Manager('Gabe', 34, 'gabeab34@gmail.com', 55);

test('Office Number of manager', () => {
    expect(manager.getOfficeNumber()).toEqual(55)
});

test('Role of employee', () => {
    expect(manager.getRole()).toEqual("Manager")
});