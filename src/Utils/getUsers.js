/**
 * Mengambil seluruh data pengguna dari alamat API
 * @returns {Object[]} .
 */

export async function getUsers() {
	const url = "https://jsonplaceholder.typicode.com/users";
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Request gagal: ${res.status}`);
	}

	return res.json();
}