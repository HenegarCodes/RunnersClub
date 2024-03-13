



function App() {
    return (
      <>
        <ApolloProvider client={client}>
          <div className='app-wrapper'>
            <div className='app-container'>
              <header className="app-header">
                <div className="app-logo">
                  <FaGamepad />
                </div>
                <h1 className="app-title">VGH</h1>
              </header>
              <Outlet />
            </div>
          </div>
        </ApolloProvider>
      </>
    )
  }
  
  export default App
  