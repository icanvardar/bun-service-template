/* -------------------------------------------------------------------------- */
/*                               EXAMPLE SERVICE                              */
/* -------------------------------------------------------------------------- */

/**
 * A service class that contains interactions between server and database, etc.
 */
class Foo {
    async foo(): Promise<string> {
        return "Hello world!";
    }
}

export default Foo;
