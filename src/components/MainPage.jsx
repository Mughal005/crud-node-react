import React, { useState } from "react";
import InsertData from "./InsertData";
import ReadEditDelete from "./ReadEditDelete";
import Navigation from "./Navigation/Navigation";

export default function MainPage() {
	const [updateItem, setUpdateItem] = useState(null);
	const [refresh, setRefresh] = useState(null);

	const handleEdit = (item) => {
		setUpdateItem(item);
	};

	const handleClearUpdate = () => {
		setUpdateItem(null);
		setRefresh((prevState) => prevState + 1);
	};
	return (
		<div>
			<Navigation />
			<InsertData
				clearUpdate={handleClearUpdate}
				updateItem={updateItem}
				setRefresh={setRefresh}
			/>
			<hr style={{ width: "100%", borderTop: "3px solid #000" }} />
			<ReadEditDelete
				onEdit={handleEdit}
				refresh={refresh}
				setRefresh={setRefresh}
			/>
		</div>
	);
}
