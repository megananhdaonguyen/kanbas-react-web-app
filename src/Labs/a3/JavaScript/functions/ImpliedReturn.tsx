const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function impledReturn() {
    return (
        <>
            <h3>Implied return</h3>
            fourTimesFive = {multiply(4, 5)}<br />
            multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    )
}
export default impledReturn