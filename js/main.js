
let exerciseList = [];
let currentExerciseIndex = -1;



function handleExerciseSequenceSelectDropdownChange(selectElement) {
    let selectedValue = selectElement.value;
    
    // let imagesContainer = document.getElementById('imagesContainer');
    // imagesContainer.innerHTML = "";
    // // alert("You selected: " + selectedValue);
    // let p = document.createElement('p');
    // p.innerText = selectedValue;
    // imagesContainer.appendChild(p);
    

    if (selectedValue == "--select--"){
        exerciseList = [];
        currentExerciseIndex = -1;
        _updateDisplay();
    }
    else {
        exerciseList = [];
        for (const title in exercises_infos[selectedValue]) {
            exerciseList.push([title, exercises_infos[selectedValue][title]["file_name"]]);
        }
        
        currentExerciseIndex = 0;
        _updateDisplay();
        
        // let debugP = document.getElementById('debugP');
        // debugP.innerHTML = exerciseList;
        
        
    }
}



function handlePrevExerciseGIF() {
    // currentExerciseIndex = currentExerciseIndex-1;
    // if (currentExerciseIndex < 0){
    //     currentExerciseIndex = exerciseList.length-1;
    // }
    currentExerciseIndex = Math.max(currentExerciseIndex-1, 0);
    _updateDisplay();
}
function handleNextExerciseGIF() {
    // currentExerciseIndex = currentExerciseIndex+1;
    // if (currentExerciseIndex >= exerciseList.length){
    //     currentExerciseIndex = 0;
    // }
    currentExerciseIndex = Math.min(currentExerciseIndex+1, exerciseList.length-1);
    _updateDisplay();
}



function _updateDisplay() {
    let exerciseTitle = document.getElementById('exerciseTitle');
    let exerciseGIF = document.getElementById('exerciseGIF');
    let prevExerciseGIFBtn = document.getElementById('prevExerciseGIFBtn');
    let nextExerciseGIFBtn = document.getElementById('nextExerciseGIFBtn');
    
    if (currentExerciseIndex == -1){
        exerciseTitle.innerHTML = "";
        exerciseGIF.src = "./data/icon_gray.png";
        prevExerciseGIFBtn.disabled = true;
        nextExerciseGIFBtn.disabled = true;
    }
    else{
        exerciseTitle.innerHTML = `${currentExerciseIndex+1} (of ${exerciseList.length}): ${exerciseList[currentExerciseIndex][0]}`;
        exerciseGIF.src = `./exercises/${exerciseList[currentExerciseIndex][1]}`;
        prevExerciseGIFBtn.disabled = false;
        nextExerciseGIFBtn.disabled = false;
    }
}



// ------------------------------------------------------------------------------------------------------------------------------------------------
const exercises_infos = {
    "Warm Up": {
        "Seated Ankle Roll": {
            "file_name": "Chair-seated_ankle_roll.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Glut Squeeze": {
            "file_name": "Chair-seated_glut_squeeze.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Leg Extensions": {
            "file_name": "Chair-seated_leg_extensions.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Marching": {
            "file_name": "Chair-seated_marching.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Cat Cow": {
            "file_name": "Chair-seated_cat_cow.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Hamstring Stretch": {
            "file_name": "Chair-seated_hamstring_stretch.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Chair Squats": {
            "file_name": "Chair-chair_squats.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Sit and Stand": {
            "file_name": "Chair-sit_and_stand.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Chair Triceps Dip": {
            "file_name": "Chair-chair_triceps_dip.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Pigeon": {
            "file_name": "Chair-seated_pigeon.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Forward Bend in Chair": {
            "file_name": "Chair-forward_bend_in_chair.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Side Angle": {
            "file_name": "Chair-seated_side_angle.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Oblique Twists": {
            "file_name": "Desk-Chair-seated_oblique_twists.gif",
            "required_tools": [
                "Desk",
                "Chair"
            ]
        },
        "Desk Plank": {
            "file_name": "Desk-desk_plank.gif",
            "required_tools": [
                "Desk"
            ]
        },
        "Desk Pushups": {
            "file_name": "Desk-desk_pushups.gif",
            "required_tools": [
                "Desk"
            ]
        },
        "Standing Desk Back Stretch": {
            "file_name": "Desk-standing_desk_back_stretch.gif",
            "required_tools": [
                "Desk"
            ]
        },
        "Yoga Seated Eagle": {
            "file_name": "Chair-yoga_seated_eagle.gif",
            "required_tools": [
                "Chair"
            ]
        }
    },
    "Cool Down": {
        "Seated Spinal Twist": {
            "file_name": "Chair-seated_spinal_twist.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Seated Oblique Twists": {
            "file_name": "Desk-Chair-seated_oblique_twists.gif",
            "required_tools": [
                "Desk",
                "Chair"
            ]
        },
        "Forward Bend in Chair": {
            "file_name": "Chair-forward_bend_in_chair.gif",
            "required_tools": [
                "Chair"
            ]
        },
        "Neck Stretch": {
            "file_name": "None-neck_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Wrist Stretch 1": {
            "file_name": "None-wrist_stretch_1.gif",
            "required_tools": [
                "None"
            ]
        },
        "Wrist Stretch 2": {
            "file_name": "None-wrist_stretch_2.gif",
            "required_tools": [
                "None"
            ]
        },
        "Shoulder Roll": {
            "file_name": "None-shoulder_roll.gif",
            "required_tools": [
                "None"
            ]
        }
    },
    "Upper Body": {
        "Bent Over Rows": {
            "file_name": "Dumbbell-bent_over_rows.gif",
            "required_tools": [
                "Dumbbell"
            ]
        },
        "Seated Reverse Fly": {
            "file_name": "Dumbbell-Chair-seated_reverse_fly.gif",
            "required_tools": [
                "Dumbbell",
                "Chair"
            ]
        },
        "Shoulder Blade Squeeze": {
            "file_name": "None-shoulder_blade_squeeze.gif",
            "required_tools": [
                "None"
            ]
        },
        "Shoulder Stretch": {
            "file_name": "None-shoulder_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Reach Up Back Rotation Stretch": {
            "file_name": "None-reach_up_back_rotation_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Triceps Stretch": {
            "file_name": "None-triceps_stretch.gif",
            "required_tools": [
                "None"
            ]
        }
    },
    "Lower Body": {
        "Step Ups": {
            "file_name": "Step-step_ups.gif",
            "required_tools": [
                "Step"
            ]
        },
        "Single Leg Deadlifts": {
            "file_name": "None-single_leg_deadlifts.gif",
            "required_tools": [
                "None"
            ]
        },
        "Standing Calf Raise": {
            "file_name": "Dumbbell-standing_calf_raise.gif",
            "required_tools": [
                "Dumbbell"
            ]
        },
        "Side Lunges": {
            "file_name": "None-side_lunges.gif",
            "required_tools": [
                "None"
            ]
        },
        "Wall Sit": {
            "file_name": "Wall-wall_sit.gif",
            "required_tools": [
                "Wall"
            ]
        },
        "Hip Flexor Stretch": {
            "file_name": "None-hip_flexor_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Lean Stretch": {
            "file_name": "None-lean_stretch.gif",
            "required_tools": [
                "None"
            ]
        }
    },
    "Full Body": {
        "Yoga Warrior": {
            "file_name": "None-yoga_warrior.gif",
            "required_tools": [
                "None"
            ]
        },
        "Yoga Reverse Warrior": {
            "file_name": "None-yoga_reverse_warrior.gif",
            "required_tools": [
                "None"
            ]
        },
        "Ceiling Reach": {
            "file_name": "None-ceiling_reach.gif",
            "required_tools": [
                "None"
            ]
        },
        "Side Stretch": {
            "file_name": "None-side_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Chest Stretch": {
            "file_name": "None-chest_stretch.gif",
            "required_tools": [
                "None"
            ]
        },
        "Upper Back Stretch": {
            "file_name": "None-upper_back_stretch.gif",
            "required_tools": [
                "None"
            ]
        }
    }
};
