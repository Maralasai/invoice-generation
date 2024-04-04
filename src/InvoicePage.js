import React,{useState,useEffect} from "react";
import './InvoicePage.css';
import TableData from './TableData';

function InvoicePage(){
    const [isTable,setIsTable]=useState(false);
    const [id,setId]=useState("");
    const [invoice,setInvoice]=useState("");
    const [company,setCompany]=useState("");
    const [name,setName]=useState("");
    const [saddress,setSaddress]=useState("");
    const [city,setCity]=useState("");
    const [postal,setPostal]=useState("");
    const [phone,setPhone]=useState("");
    const [companyid,setCompanyid]=useState("");
    const [iban,setIban]=useState("");
    const [swift,setSwift]=useState("");
    const [rcompany,setRcompany]=useState("");
    const [rname,setRname]=useState("");
    const [raddress,setRaddress]=useState("");
    const [rcity,setRcity]=useState("");
    const [rpostal,setRpostal]=useState("");
    const [rphone,setRphone]=useState("");
    const [rcompanyid,setRcompanyid]=useState("");
    const [service,setService]=useState('');
    const [taxfree,setTaxfree]=useState();
    const [taxper,setTaxper]=useState();
    const [tax,setTax]=useState();
    const [total,setTotal]=useState(0);
    const [wtotal,setWtotal]=useState(0);
    const [list,setList]=useState([]);
    const [subTotal,setSubTotal]=useState("");
   
    useEffect(()=>{
  
        setTax(taxfree*taxper);
       
    },[tax]);
    useEffect(()=>{
  
    setTotal(parseInt(taxfree)+parseInt(tax));
    },[total]);
    
    return(
        <div className="container">
            <div className="leftcomp">
                <h4>Member</h4>
                <label>Id</label><br/>
                <input type="number" 
                name='Id' 
                autoComplete="off"
                value={id}
                onChange={e=>setId(e.target.value)}/><br/>
                <label>Invoice number</label><br/>
                <input type="number" 
                name='Invoice number' 
                autoComplete="off"
                value={invoice}
                onChange={e=>setInvoice(e.target.value)}/><br/>
                <h4>Sender</h4>
                <label>Company</label><br/>
                <input type="text"
                 name='company' 
                 autoComplete="off"
                 value={company}
                 onChange={e=>setCompany(e.target.value)}/><br/>
                <label>Name</label><br/>
                <input type="text" 
                name='name' 
                autoComplete="off"
                value={name}
                onChange={e=>setName(e.target.value)}/><br/>
                <label>Address</label><br/>
                <input type="text" 
                name='address'
                value={saddress} 
                autoComplete="off"
                onChange={e=>setSaddress(e.target.value)}/><br/>
                <label>City</label><br/>
                <input type="text"
                 name='city' 
                 value={city}
                 onChange={e=>setCity(e.target.value)}/><br/>
                <label>Postal Code</label><br/>
                <input type="number" 
                name='Postal code' 
                autoComplete="off"
                value={postal}
                onChange={e=>setPostal(e.target.value)}/><br/>
                <label>Phone</label><br/>
                <input type="number" 
                name='Phone'
                autoComplete="off"
                value={phone}
                onChange={e=>setPhone(e.target.value)}/><br/>
                <label>Company Id</label><br/>
                <input type="number" 
                name="Company Id"
                autoComplete="off" 
                value={companyid}
                onChange={e=>setCompanyid(e.target.value)}/><br/>
                <label>IBAN</label><br/>
                <input type="text"
                 name='IBAN'
                 value={iban}
                 autoComplete="off"
                 onChange={e=>setIban(e.target.value)}/><br/>
                <label>BIC/SWIFT</label><br/>
                <input type="text" 
                name='BIC/SWIFT' 
                value={swift}
                autoComplete="off"
                onChange={e=>setSwift(e.target.value)}/><br/>

                <h4>Recipient</h4>
                <label>Company</label><br/>
                <input type="text" 
                name='company'
                value={rcompany} 
                autoComplete="off"
                onChange={e=>setRcompany(e.target.value)}/><br/>
                <label>Name</label><br/>
                <input type="text"
                 name='name'
                 value={rname}
                 autoComplete="off"
                 onChange={e=>setRname(e.target.value)}/><br/>
                <label>City</label><br/>
                <input type="text" 
                name='city' 
                autoComplete="off"
                value={rcity}
                onChange={e=>setRcity(e.target.value)}/><br/>
                <label>Address</label><br/>
                <input type="text" 
                name='address'
                value={raddress} 
                autoComplete="off"
                onChange={e=>setRaddress(e.target.value)}/><br/>
                <label>Postal Code</label><br/>
                <input type="number" 
                name='Postal code' 
                autoComplete="off"
                value={rpostal}
                onChange={e=>setRpostal(e.target.value)}/><br/>
                <label>Phone</label><br/>
                <input type="number" 
                name='Phone'
                autoComplete="off"
                value={rphone}
                onChange={e=>setRphone(e.target.value)}/><br/>
                <label>Company Id</label><br/>
                <input type="number" 
                name="Company Id"
                autoComplete="off" 
                value={rcompanyid}
                onChange={e=>setRcompanyid(e.target.value)}/><br/>
                
            </div>
            <div className="middlebar">
                <h4>{company}</h4>
                {name}<br/>
                {saddress}<br/>
                {postal}-{city}<br/>
                {"Phone:"+phone}<br/>
                {"Company Id:"+companyid}<br/>
                {"IBAN:"+iban}<br/>
                {"BIC/SWIFT:"+swift}<br/><br/>
                <h4>{rcompany}</h4>
                {rname}<br/>
                {raddress}<br/>
                {rcity}<br/>
                {rpostal}<br/>
                {rphone}<br/>
                {rcompanyid}

                <>
                {isTable?(
                <>
                <TableData    
                    service={service} 
                    setService={setService}
                    taxfree={taxfree} 
                    setTaxfree={setTaxfree}
                    taxper={taxper} 
                    setTaxper={setTaxper}
                    tax={tax} 
                    setTax={setTax}
                    total={total}
                    setTotal={setTotal}
                    subTotal={subTotal}
                    setSubTotal={setSubTotal}
                    list={list}
                    setList={setList}
                    wtotal={wtotal}
                    setWtotal={setWtotal}
                    
                
                />
                </>
                 ):
                <> 
                <button onClick={()=>setIsTable(true)}>
                Add Service
                 </button>
                </>
            
                 }
                </>

            </div>
            <div className="rightbar">
                    <h3>Invoice</h3>
                    {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}<br/>
                         {invoice}
                
            </div>
        
        </div>
    )
}
export default InvoicePage