import Engineer from "../lib/engineer";

const engineer = new Engineer('Gabe', 34, 'gabeab34@gmail.com', 'gabeab34');

test('GitHub username of engineer', () => {
    expect(engineer.getGithub()).toEqual('gabeab34')
});

test('Role of employee', () => {
    expect(engineer.getRole()).toEqual("Engineer")
});