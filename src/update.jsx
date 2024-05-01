import React, { useState } from 'react';
import './update.css';
import UpdateItemComponent from './updateItemComponent'; // Import the UpdateItemComponent

function DeleteItem({ index, onDelete }) {
  const handleDelete = () => {
    onDelete(index);
  };

  return <button onClick={handleDelete}>Delete</button>;
}

function InventorySystem() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [isUsable, setIsUsable] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems([...items, { name: itemName, usable: isUsable, quantity: quantity }]);
      setItemName('');
      setIsUsable(true);
      setQuantity(1);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleUpdateItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].usable = !updatedItems[index].usable;
    setItems(updatedItems);
  };

  const handleUpdateQuantity = (index, updatedQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = updatedQuantity;
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>CMT Inventory System</h1>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min="1"
        />
      </label>
      <label>
        Usable:
        <input
          type="checkbox"
          checked={isUsable}
          onChange={() => setIsUsable(!isUsable)}
        />
      </label>
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} className="inventory-item">
            {item.name} - Quantity: {item.quantity} - {item.usable ? 'Usable' : 'Not Usable'}
            <DeleteItem index={index} onDelete={handleDeleteItem} />
            <UpdateItemComponent
              index={index}
              item={item}
              onUpdate={handleUpdateItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventorySystem;
