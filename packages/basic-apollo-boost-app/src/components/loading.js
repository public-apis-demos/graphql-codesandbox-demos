import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export const Error = () => {
  return (
    <div className="alert alert-danger" role="alert">
      Something went wrong 😔
    </div>
  )
}