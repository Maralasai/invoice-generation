import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Service"
          name="Service"
          value={editFormData.service}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Tax free"
          name="Tax Free"
          value={editFormData.TaxFree}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Tax (%)"
          name="Tax(%)"
          value={editFormData.TaxPer}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Tax"
          name="Tax"
          value={editFormData.Tax}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
