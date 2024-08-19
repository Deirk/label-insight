import { jsonplaceholderfetcher } from '../../../../src/config/adapters/jsonplaceholder/jsonplaceholder.adapter';

describe( "test in jsonplaceholderfetcher.adapter.ts", () => {
  test( "should call api with correct parameters", async () => {
    const data = await jsonplaceholderfetcher.get( '/todos/1' );
    expect( data ).toBeInstanceOf( Object );
    expect( data ).toEqual( {
      userId: expect.any( Number ),
      id: expect.any( Number ),
      title: expect.any( String ),
      completed: expect.any( Boolean )
    } );
  } );

  test( 'httpClientPlugin.get() should return an error', async () => {

    try {

      await jsonplaceholderfetcher.get( 'https://jsonplaceholder.typicode.com/errorEndpoing/123' );

    } catch ( error ) {

      expect( error ).toBeDefined();

    }
  } );
} );
