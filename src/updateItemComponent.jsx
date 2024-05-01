import React, { useState } from 'react';

function UpdateItemComponent({ index, item, onUpdate, onUpdateQuantity }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedQuantity, setUpdatedQuantity] = useState(item.quantity);

  const handleToggleUpdateMode = () => {
    setUpdateMode(!updateMode);
  };

  const handleUpdate = () => {
    onUpdate(index);
    handleToggleUpdateMode();
  };

  const handleUpdateQuantity = () => {
    onUpdateQuantity(index, updatedQuantity);
    handleToggleUpdateMode();
  };

  return (
    <div>
      {updateMode ? (
        <div>
          <input
            type="number"
            value={updatedQuantity}
            onChange={(e) => setUpdatedQuantity(parseInt(e.target.value))}
            min="1"
          />
          <button onClick={handleUpdate}>Update Usability</button>
          <button onClick={handleUpdateQuantity}>Update Quantity</button>
        </div>
      ) : (
        <button onClick={handleToggleUpdateMode}>Update</button>
      )}
    </div>
  );
}

export default UpdateItemComponent;
