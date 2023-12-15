// PostItemForm.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const PostItemForm = ({ open, onClose, onPostItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const handlePostItem = () => {
    // Validate form fields
    if (!itemName || !itemPrice) {
      // Handle validation error
      return;
    }

    // Call the onPostItem callback with the item details
    onPostItem({ name: itemName, price: parseFloat(itemPrice) });

    // Clear form fields
    setItemName("");
    setItemPrice("");

    // Close the modal
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Post Item for Sale</DialogTitle>
      <DialogContent>
        <TextField
          label="Item Name"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <TextField
          label="Item Price"
          type="number"
          fullWidth
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handlePostItem} color="primary">
          Post Item
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostItemForm;
