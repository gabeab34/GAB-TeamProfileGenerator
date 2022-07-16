import Intern from '../lib/intern';

const intern = new Intern ('Gabe', 34, 'gabeab34@gmail.com', 'GSU');

test('School of the intern', () => {
    expect(intern.getSchool()).toEqual('GSU')
});

test('Role of employee', () => {
    expect(intern.getRole()).toEqual("Intern")
});