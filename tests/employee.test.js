import Employee from '../lib/employee';

const employee = new Employee('Gabe', 34, 'gabeab34@gmail.com');

test('Name of employee', () => {
    expect(employee.getName()).toEqual('Gabe')
});


test('Id of employee', () => {
    expect(employee.getId()).toEqual(34)
});

test('Email of employee', () => {
    expect(employee.getEmail()).toEqual('gabeab34@gmail.com')
});


test('Role of employee', () => {
    expect(employee.getRole()).toEqual("Employee")
});