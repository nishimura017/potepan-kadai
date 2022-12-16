
//要素を取得
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const time=document.getElementById('time');
const reset=document.getElementById('reset');

let timerId;
let elapsedMs = 0;//経過ミリ秒

//タイムを算出
function timeToString(millis) {
	const ms = millis % 1000;
	const s = Math.floor(millis/1000) % 60;
	const m =Math.floor(millis/1000/60) % 60;
//文字型に変更、桁数指定，0埋め
	const formattedMs = ms.toString().padStart(2,0);
	const formattedS = s.toString().padStart(2,0);
	const formattedM = m.toString().padStart(2,0);

		return `${formattedM}:${formattedS}.${formattedMs}`;
}

//スタート押下時
start.addEventListener('click',()=>{
	let startMs = Date.now();//スタート時のミリ秒取得

	timerId = setInterval(() => {
		const nowMs=Date.now();//ストップ時のミリ秒取得
		elapsedMs = nowMs - startMs;

		/*const ms = elapsedMs % 1000;
		const s = Math.floor(elapsedMs / 1000) % 60;
		const m = Math.floor(elapsedMs / 1000 /60) % 60;

		const formattedMs = ms.toString().padStart(3,'0');
		const formattedS = s.toString().padStart(2,'0');
		const formattedM = m.toString().padStart(2,'0');
		*/
		time.textContent = timeToString(elapsedMs);
		start.disabled = true;
		stop.disabled = false;
		reset.disabled = false;

	}, 10);
})

//ストップ押下時
stop.addEventListener('click',() => {
	clearInterval(timerId);

	start.disabled = false;
	stop.disabled = true;
	reset.disabled = false;
});

//リセット押下時
reset.addEventListener('click',() => {
	elapsedMs = 0;
	time.innerHTML = '00:00.000';
	clearInterval(timerId);
	
	start.disabled = false;
	stop.disabled = false;
	reset.disabled = true;
});

