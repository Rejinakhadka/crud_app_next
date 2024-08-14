"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Item } from '../types';

interface CrudContextType {
  items: Item[];
  addItem: (item: Item) => void;
  updateItem: (id: number, updatedItem: Item) => void;
  deleteItem: (id: number) => void;
}

const CrudContext = createContext<CrudContextType | undefined>(undefined);

export const CrudProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const updateItem = (id: number, updatedItem: Item) => {
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <CrudContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </CrudContext.Provider>
  );
};

export const useCrudContext = () => {
  const context = useContext(CrudContext);
  if (!context) {
    throw new Error('useCrudContext must be used within a CrudProvider');
  }
  return context;
};
