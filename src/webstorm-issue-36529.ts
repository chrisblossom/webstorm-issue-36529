// Should give eslint error;
console.log('eslint error');

function example(test?: string) {
    return test;
}

export default example();