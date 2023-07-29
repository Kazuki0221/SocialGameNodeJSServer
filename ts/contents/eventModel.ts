import { query } from "./../lib/database"

//TODO: イベントポイント
export async function addEventPoint(userId: number, basePoint: number, randomPoint: number)
{
	try
	{
		let user = await query("SELECT * FROM EventPoint WHERE id = ?", userId);
		if (user.length <= 0) {
			let create = await query("INSERT INTO EventPoint (id, point) VALUES(?, ?)", [userId, 0]);
		}
		
		//NOTE: userModelのaddMoneyを参考にするとよい
		let addAmount = basePoint + Math.floor(Math.random() * randomPoint);
		let result = await query("UPDATE EventPoint SET point = point + ? WHERE id = ?", [addAmount, userId]);

		//キャッシュの更新が必要ならそうする
		//

		//
		return [addAmount];
	}
	catch(ex)
	{
		console.log(ex);
	}
}
