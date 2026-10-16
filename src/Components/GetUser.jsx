import { useEffect, useState } from "react";
import { getUsers } from "../Utils/getUsers";
import { filterUsers } from "../Utils/filterUsers";

/**
 * 
 * @returns {JSX.Element} Antarmuka pengguna untuk menampilkan Nama dan pencarian Nama.
 */

export default function GetUser() {
	const [sourceData, setSourceData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getUsers();
				setSourceData(data);
				setFilteredData(data);

			} catch (error) {
				console.error(`gagal mengambil data: ${error.message}`);
			}
		}
		fetchData();
	}, []);

	/**
	 * Menangani searching input teks serta memanggil filterUsers.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e - event dari input teks.
	 */
	const handleSearch = (e) => {
		const query = e.target.value;
		setSearchQuery(query);

		const hasil = filterUsers(sourceData, query);
		setFilteredData(hasil);
	}

	return (
		<>
			<div className="max-w-2xl mx-auto p-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-6">
					searching user
				</h2>
				
				<input
					type="text"
					placeholder="Cari nama user di sini..."
					value={searchQuery}
					onChange={handleSearch}
					className="w-full p-3 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-"
				/>

				<div className="border border-gray-200 rounded-lg p-2 bg-white">
					{filteredData.length > 0 ? (
					filteredData.map((user) => (
						<div 
						key={user.id} 
						className="p-3 border-b border-gray-100 last:border-none"
						>
						<strong className="block text-lg font-semibold text-gray-800">
							{user.name}
						</strong>
						</div>
					))
					) : (
					<p className="text-red-500 text-center py-6 font-medium">
						User not found.
					</p>
					)}
				</div>
			</div>
		</>
	)
}