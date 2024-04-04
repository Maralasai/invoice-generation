import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import './TableData.css';

function TableData({
  service,
  setService,
  taxfree,
  setTaxfree,
  taxper,
  setTaxper,
  tax,
  setTax,
  total,
  setTotal,
  list,
  setList,
  wtotal,
  setWtotal,
  
}) {
  const [shown,setIsshown]=useState(false)
  const [isEditing, setIsEditing] = useState(false)


  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!service || !taxfree || !taxper) {
      alert("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        service,
        taxfree,
        taxper,
        tax,
        total,
      }
      setService("")
      setTaxfree("")
      setTaxper("")
      setTax("")
      setTotal("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  useEffect(() => {
    const calculateAmount = (tax) => {
      setTax(taxfree * taxper)
    }

    calculateAmount(tax)
  }, [tax,taxfree, taxper, setTax])
  useEffect(() => {
    const calculateTotal = (total) => {
      setTotal(taxfree + tax)
    }

    calculateTotal(total)
  }, [total,taxfree, tax, setTotal])

  
  useEffect(() => {
    let rows = document.querySelectorAll(".total")
    let sum = 0
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "total") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setWtotal(sum)
      }
    }
  })
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setService(editingRow.service)
    setTaxfree(editingRow.taxfree)
    setTaxper(editingRow.taxper)

  }
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  return (


        <>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:mt-16">
              <label>Service</label><br/>
              <input
                type="text"
                className='inputs'
                name="service"
                id="service"
                placeholder="Service Name"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>

            <div className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label >TaxFree </label><br/>
                <input
                  type="number"
                  className='inputs'
                  name="taxfree"
                  id="taxfree"
                  placeholder="taxfree"
                  value={taxfree}
                  onChange={(e) => setTaxfree(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label>Tax (%)  </label><br/>
                <input
                  type="number"
                  className='inputs'
                  name="taxper"
                  id="taxper"
                  placeholder="Tax (%)"
                  value={taxper}
                  onChange={(e) => setTaxper(e.target.value)}
                />
              </div>
              <br/>
            </div>
            <button
              type="submit"
              className="submitbutton"
            >
              {isEditing ? "Editing Row Item" : "Add Table Item"}
            </button>
            <br/><br/>
          </form>
                 <table width="100%" className="mb-5">
        
                        <thead>
                            <tr className="bg-gray-10 p-1">
                                <td >Service</td>
                                <td>TaxFree</td>
                                <td>Tax(%)</td>
                                <td>Tax</td>
                                <td>Total</td>
                            </tr>
                        </thead><br/>
                        {list.map(({ id, service, taxfree, taxper,tax,total }) => (
                            <React.Fragment key={id}>
                        <tbody className='tbody'>
                            <tr className="h-10" onMouseEnter={()=>setIsshown(true)} onMouseLeave={()=>setIsshown(false)} >
                                <td >{service}</td>
                                <td >{taxfree}</td>
                                <td >{taxper}</td>
                                <td >{tax}</td>
                                <td className="total">{total}</td>
                                
                                  { shown && (
                                    <>
                                    <td>  <button onClick={() => editRow(id)}>Edit</button>&nbsp;&nbsp;
                                          <button onClick={() => deleteRow(id)}> Delete</button>
                               
                                    </td>
                                    </>
                                    
                                  )

                                     }
                                            
                            </tr>
                            
                        </tbody>
                        </React.Fragment>
        ))}
        </table>
        <div align="right">
          
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs. {wtotal.toLocaleString()}
        </h2>
      </div>
      </>
  )
}

export default TableData
