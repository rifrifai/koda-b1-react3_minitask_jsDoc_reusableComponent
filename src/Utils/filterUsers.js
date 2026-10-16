/**
 * @param {array[]} users  
 * @param {string} queryUser
 * @returns {array[]} Hasil filter users berdasarkan nama
 */

export function filterUsers(users, queryUser) {
	if (!queryUser) return users;
	const search = users.filter((item) => {
		return item.name.toLowerCase().includes(queryUser.toLowerCase());
	});

	return search;
}