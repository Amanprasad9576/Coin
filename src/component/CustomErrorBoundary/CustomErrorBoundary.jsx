import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI ({error,resetErrorBoundary}){
    return (
        <div
           className="h-[50vh] flex items-center justify-center px-6 bg-yellow-600"
        >
          <div role="alert" className="alert alert-warning">
              <p> Something went wrong</p>
              <div> error:{error?.message}</div>
              <button onClick={resetErrorBoundary}>Try again</button>
           </div>
        </div>
    )
 }
 
 export default function CustomErrorBoundary({children}){
    return (
        <ErrorBoundary
           FallbackComponent={CustomErrorBoundaryUI}
           onReset={()=>window.location.reload()}
        >
           {children}
        </ErrorBoundary>
    )
 }




/* 
make the two function 
one function parameter (error,resetError)



another function Parameter (children)

*/



