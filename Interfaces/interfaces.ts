type Team = "red" | "blue" | "yellow" // 옵션
type Health = 1 | 5 | 10
 //객체형태임을 타입스크립트에게 알려줌(interfaces)
interface Player1 {
    nickname: string,
    team : Team
    healthBar : Health
}
const nico1 : Player1= {
    nickname : "nico",
    team : "red",
    healthBar : 10
}

// interface User{
//     readonly name: string
// }
// interface Player extends User {
// }
// const nico : Player = {
//     name:"nico"
// }