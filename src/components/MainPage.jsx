import React, { useState } from "react";
import InsertData from "./InsertData";
import ReadEditDelete from "./ReadEditDelete";

export default function MainPage() {
	const [updateItem, setUpdateItem] = useState(null);

	const handleEdit = (item) => {
		setUpdateItem(item);
	};

	const handleClearUpdate = () => {
		setUpdateItem(null);
	};
	return (
		<div>
			<InsertData clearUpdate={handleClearUpdate} updateItem={updateItem} />
			<hr style={{ width: "100%", borderTop: "3px solid #000" }} />
			<ReadEditDelete onEdit={handleEdit} />
		</div>
	);
}
