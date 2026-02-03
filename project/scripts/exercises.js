const exercises = [
	{
		type: "Chest/Triceps",
		exercises: `dumbbell bench press<br>
Incline dumbbell press<br>
Chest flyes (cable or dumbbell)<br>
Tricep pushdowns<br>
Overhead tricep extension<br>`,
		amount: "3 sets of 10-12 reps",
		cardio: "Treadmill, elliptical, or rowing machine",
	},
	{
		type: "Back/Biceps",
		exercises: `Lat pulldowns<br>
Seated cable rows<br>
Dumbbell rows<br>
Face pulls<br>
Barbell or dumbbell bicep curls<br>
Hammer curls<br>`,
		amount: "3 sets of 10-12 reps",
		cardio: "Stationary bike or stair climber",
	},
	{
		type: "Legs",
		exercises: `Barbell squats or leg press<br>
Romanian deadlifts<br>
Leg extensions<br>
Leg curls<br>
Calf raises<br>
Walking lunges`,
		amount: "Leg Press 4 sets of 12 -15 reps, all others 3 sets of 12 -15 reps",
		cardio: "Treadmill incline walk or rowing machine",
	},
	{
		type: "Shoulders/Abs",
		exercises: `
Overhead press (barbell or dumbbell)<br>
Lateral raises<br>
Front raises<br>
Rear delt flyes<br>
Shrugs<br>
Planks & Russian twists<br>
Hanging leg raises
`,
		amount: `3 sets of 12 to 15 reps (45 seconds on plank)`,
		cardio: "Rowing machine or bike",
	},
];
const getExercises = () => {
	return exercises
		.map(
			(exercise) =>
				`<td><h3>STRENGTH</h3>${exercise.exercises} <p>${exercise.amount}</p></td>`,
		)
		.join("");
};

const getCardio = () => {
	return exercises
		.map(
			(exercise) =>
				`<td><h3>CARDIO</h3><p>${exercise.cardio}</p><p>60-70% max HR (max HR = 193bpm) 123 ~ 134 bpm</p></td>`,
		)
		.join("");
};

document.getElementById("exercise-table-body").innerHTML =
	`<tr>${getExercises()}</tr>`;
document.getElementById("exercise-table-body").innerHTML +=
	`<tr>${getCardio()}</tr>`;
