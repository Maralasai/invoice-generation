import React,{useState} from "react";
import './HomePage.css';
import InvoicePage from "./InvoicePage";
function HomePage(){
    const [isInvoice,setIsInvoice]=useState(false)

    return(
        <>
            {isInvoice?(
                <>
                <InvoicePage/>
                </>
            ):
            <> 
            <button onClick={()=>setIsInvoice(true)}>
                ADD INVOICE
            </button>
            </>
            
        
        }
        </>
        
    )
}
export default HomePage