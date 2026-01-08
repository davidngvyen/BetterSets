"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Exercise data organized by muscle group
const exercises = [
    // ==================== CHEST ====================
    {
        name: 'Barbell Bench Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/bench-press.gif',
        instructions: '1. Lie flat on the bench with feet firmly on the floor.\n2. Grip the barbell slightly wider than shoulder-width.\n3. Unrack the bar and lower it to your mid-chest.\n4. Press the bar back up until arms are fully extended.\n5. Keep your back flat and core engaged throughout.',
        tips: 'Keep your wrists straight and elbows at 45-degree angle. Don\'t bounce the bar off your chest.'
    },
    {
        name: 'Incline Barbell Bench Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/bench-press.gif',
        instructions: '1. Set bench to 30-45 degree incline.\n2. Grip the barbell slightly wider than shoulder-width.\n3. Unrack the bar and lower it to your mid-chest.\n4. Press the bar back up until arms are fully extended.\n5. Keep your back flat and core engaged throughout.',
        tips: 'Keep your wrists straight and elbows at 45-degree angle. Don\'t bounce the bar off your chest.'
    },
    {
        name: 'Dumbbell Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Dumbbells, Bench',
        diagramUrl: '/exercises/incline-db-press.gif',
        instructions: '1. Lie flat on the bench with feet firmly on the floor.\n2. Hold dumbbells at shoulder level with palms facing forward.\n3. Press dumbbells up until arms are extended.\n4. Lower slowly to starting position.\n5. Keep feet flat on the floor.',
        tips: 'Focus on squeezing your upper chest at the top. Don\'t let the dumbbells drift too far apart.'
    },
    {
        name: 'Incline Dumbbell Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Dumbbells, Incline Bench',
        diagramUrl: '/exercises/incline-db-press.gif',
        instructions: '1. Set bench to 30-45 degree incline.\n2. Hold dumbbells at shoulder level with palms facing forward.\n3. Press dumbbells up until arms are extended.\n4. Lower slowly to starting position.\n5. Keep feet flat on the floor.',
        tips: 'Focus on squeezing your upper chest at the top. Don\'t let the dumbbells drift too far apart.'
    },
    {
        name: 'Decline Bench Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Barbell, Decline Bench',
        diagramUrl: '/exercises/decline-bench.gif',
        instructions: '1. Secure legs at the end of the decline bench.\n2. Grip barbell slightly wider than shoulder-width.\n3. Lower the bar to your lower chest.\n4. Press back up to starting position.\n5. Keep core tight throughout movement.',
        tips: 'Use a spotter for safety. Focus on the lower chest contraction.'
    },
    {
        name: 'Dumbbell Fly',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Dumbbells, Flat Bench',
        diagramUrl: '/exercises/db-fly.gif',
        instructions: '1. Lie on flat bench holding dumbbells above chest.\n2. With slight bend in elbows, lower arms out to sides.\n3. Lower until you feel a stretch in your chest.\n4. Squeeze chest to bring dumbbells back together.\n5. Maintain the same elbow angle throughout.',
        tips: 'Use lighter weight than pressing exercises. Focus on the stretch and squeeze.'
    },
    {
        name: 'Cable Crossover',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-crossover.gif',
        instructions: '1. Set pulleys to high position.\n2. Stand in the center, grab both handles.\n3. Step forward slightly, lean forward.\n4. Bring hands together in front of chest.\n5. Slowly return to starting position.',
        tips: 'Keep a slight bend in your elbows. Squeeze at the bottom of the movement.'
    },
    {
        name: 'Push-Up',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: null,
        diagramUrl: '/exercises/push-up.gif',
        instructions: '1. Start in plank position with hands shoulder-width apart.\n2. Keep body in straight line from head to heels.\n3. Lower chest to the ground by bending elbows.\n4. Push back up to starting position.\n5. Keep core engaged throughout.',
        tips: 'Don\'t let hips sag or pike up. For easier version, do on knees.'
    },
    {
        name: 'Chest Dip',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Dip Bars',
        diagramUrl: '/exercises/chest-dip.gif',
        instructions: '1. Grip parallel bars and lift yourself up.\n2. Lean forward slightly to target chest.\n3. Lower body by bending elbows to 90 degrees.\n4. Push back up to starting position.\n5. Keep shoulders down and back.',
        tips: 'Lean forward more to target chest vs triceps. Don\'t go too deep if you have shoulder issues.'
    },
    {
        name: 'Machine Chest Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Chest Press Machine',
        diagramUrl: '/exercises/machine-chest-press.gif',
        instructions: '1. Adjust seat so handles are at chest level.\n2. Grip handles with overhand grip.\n3. Press forward until arms are extended.\n4. Slowly return to starting position.\n5. Keep back flat against pad.',
        tips: 'Great for beginners or finishing sets. Focus on controlled movement.'
    },
    {
        name: 'Machine Pec Deck',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Pec Deck Machine',
        diagramUrl: '/exercises/pec-deck.gif',
        instructions: '1. Adjust seat height so handles are at chest level.\n2. Place forearms on pads, elbows at 90 degrees.\n3. Squeeze chest to bring pads together in front.\n4. Pause and squeeze at the center.\n5. Slowly return to starting position with control.',
        tips: 'Don\'t let the weight stack touch between reps. Focus on the squeeze, not the weight.'
    },
    {
        name: 'Upper Chest Cable Crossover',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/upper-cable-crossover.gif',
        instructions: '1. Set pulleys to low position.\n2. Stand in the center, grab both handles.\n3. Step forward slightly for stability.\n4. Bring hands up and together at upper chest height.\n5. Slowly return to starting position.',
        tips: 'Focus on driving the movement with your upper chest. Keep a slight bend in elbows throughout.'
    },
    {
        name: 'Plate Loaded Incline Chest Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Plate Loaded Incline Press Machine',
        diagramUrl: '/exercises/plate-incline-press.gif',
        instructions: '1. Adjust seat so handles align with upper chest.\n2. Load appropriate weight on the machine.\n3. Grip handles and press forward until arms extended.\n4. Lower with control to starting position.\n5. Keep back flat against pad throughout.',
        tips: 'Great for targeting upper chest safely. Can go heavier than free weights with better stability.'
    },
    {
        name: 'Plate Loaded Flat Chest Press',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Plate Loaded Chest Press Machine',
        diagramUrl: '/exercises/plate-flat-press.gif',
        instructions: '1. Adjust seat so handles align with mid-chest.\n2. Load appropriate weight on the machine.\n3. Grip handles and press forward until arms extended.\n4. Lower with control to starting position.\n5. Keep back flat against pad throughout.',
        tips: 'Allows for heavier pressing with reduced injury risk. Focus on full range of motion.'
    },
    {
        name: 'Seated Cable Fly',
        category: 'Strength',
        muscleGroup: 'Chest',
        equipment: 'Cable Machine, Bench',
        diagramUrl: '/exercises/seated-cable-fly.gif',
        instructions: '1. Set cables to shoulder height, place bench in center.\n2. Sit on bench, grab both handles.\n3. Start with arms extended to sides, slight elbow bend.\n4. Squeeze chest to bring handles together in front.\n5. Slowly return to starting position.',
        tips: 'The seated position isolates the chest more. Control the negative portion of each rep.'
    },
    // ==================== BACK ====================
    {
        name: 'Conventional Deadlift',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Barbell',
        diagramUrl: '/exercises/deadlift.gif',
        instructions: '1. Stand with feet hip-width apart, bar over mid-foot.\n2. Bend at hips and knees, grip bar outside legs.\n3. Keep back flat, chest up, shoulders over bar.\n4. Drive through heels, extend hips and knees together.\n5. Stand tall, then reverse the movement.',
        tips: 'Keep the bar close to your body. Don\'t round your lower back. Engage lats before lifting.'
    },
    {
        name: 'Barbell Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Barbell',
        diagramUrl: '/exercises/barbell-row.gif',
        instructions: '1. Hold barbell with overhand grip, bend at hips.\n2. Keep back flat, roughly parallel to floor.\n3. Pull bar to lower chest/upper abs.\n4. Squeeze shoulder blades together at top.\n5. Lower with control.',
        tips: 'Don\'t use momentum. Keep elbows close to body for more lat engagement.'
    },
    {
        name: 'Pull-Up',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Pull-Up Bar',
        diagramUrl: '/exercises/pull-up.gif',
        instructions: '1. Hang from bar with overhand grip, wider than shoulders.\n2. Engage core and pull shoulder blades down.\n3. Pull yourself up until chin clears bar.\n4. Lower with control to full hang.\n5. Avoid swinging or kipping.',
        tips: 'Start with assisted pull-ups if needed. Focus on pulling with your back, not just arms.'
    },
    {
        name: 'Lat Pulldown',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/lat-pulldown.gif',
        instructions: '1. Sit at lat pulldown machine, thighs secured.\n2. Grip bar wider than shoulder-width.\n3. Pull bar down to upper chest.\n4. Squeeze lats at bottom.\n5. Control the bar back up.',
        tips: 'Don\'t lean back excessively. Pull elbows down and back, not just down.'
    },
    {
        name: 'Seated Cable Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/seated-cable-row.gif',
        instructions: '1. Sit at cable row station, feet on platform.\n2. Grip handle with arms extended.\n3. Pull handle to lower abdomen.\n4. Squeeze shoulder blades together.\n5. Extend arms with control.',
        tips: 'Keep torso stationary. Don\'t round your back when reaching forward.'
    },
    {
        name: 'T-Bar Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'T-Bar Machine or Landmine',
        diagramUrl: '/exercises/t-bar-row.gif',
        instructions: '1. Straddle the bar, bend at hips.\n2. Grip handles or bar with both hands.\n3. Pull weight to chest.\n4. Squeeze back at top.\n5. Lower with control.',
        tips: 'Keep your back flat. Great for building thickness in the middle back.'
    },
    {
        name: 'Face Pull',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine, Rope Attachment',
        diagramUrl: '/exercises/face-pull.gif',
        instructions: '1. Set cable to face height with rope attachment.\n2. Grip rope with thumbs pointing back.\n3. Pull rope toward face, separating hands.\n4. Externally rotate shoulders at end.\n5. Return with control.',
        tips: 'Excellent for rear delts and rotator cuff. Keep elbows high throughout.'
    },
    {
        name: 'Single-Arm Dumbbell Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Dumbbell, Bench',
        diagramUrl: '/exercises/single-arm-row.gif',
        instructions: '1. Place one knee and hand on bench.\n2. Hold dumbbell in free hand, arm extended.\n3. Pull dumbbell to hip, elbow close to body.\n4. Squeeze lat at top.\n5. Lower with control.',
        tips: 'Keep hips square to the ground. Don\'t rotate torso excessively.'
    },
    {
        name: 'Dumbbell Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/dumbbell-row.gif',
        instructions: '1. Hold dumbbells at sides, hinge at hips.\n2. Keep back flat, torso at 45-degree angle.\n3. Pull both dumbbells to hips simultaneously.\n4. Squeeze shoulder blades together at top.\n5. Lower with control.',
        tips: 'Great bilateral movement for back thickness. Keep core braced throughout.'
    },
    {
        name: 'Machine Assisted Pull-Up',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Assisted Pull-Up Machine',
        diagramUrl: '/exercises/assisted-pullup.gif',
        instructions: '1. Set assistance weight (more weight = easier).\n2. Kneel or stand on platform, grip handles wide.\n3. Pull yourself up until chin clears bar.\n4. Lower with control to full extension.\n5. Avoid swinging or using momentum.',
        tips: 'Gradually reduce assistance as you get stronger. Focus on lat engagement, not arms.'
    },
    {
        name: 'Chest Supported Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Incline Bench, Dumbbells or Barbell',
        diagramUrl: '/exercises/chest-supported-row.gif',
        instructions: '1. Set bench to 30-45 degree incline.\n2. Lie face down with chest on bench.\n3. Let arms hang down, grip weights.\n4. Pull weights up, squeezing shoulder blades.\n5. Lower with control.',
        tips: 'Eliminates momentum and lower back strain. Pure back isolation movement.'
    },
    {
        name: 'Wide Grip Lat Pulldown',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine, Wide Bar',
        diagramUrl: '/exercises/wide-lat-pulldown.gif',
        instructions: '1. Grip bar wider than shoulder-width (1.5x).\n2. Sit with thighs secured under pads.\n3. Pull bar down to upper chest.\n4. Squeeze lats and hold briefly.\n5. Control the bar back up.',
        tips: 'Emphasizes lat width. Don\'t pull behind the neck - it\'s harder on shoulders.'
    },
    {
        name: 'Neutral Grip Lat Pulldown',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine, Neutral Grip Attachment',
        diagramUrl: '/exercises/neutral-lat-pulldown.gif',
        instructions: '1. Attach neutral grip handles to cable.\n2. Sit with thighs secured under pads.\n3. Pull handles down to upper chest, palms facing each other.\n4. Squeeze lats at bottom.\n5. Control the weight back up.',
        tips: 'Easier on shoulders than wide grip. Great for overall lat development.'
    },
    {
        name: 'One Arm Lat Pulldown',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine, Single Handle',
        diagramUrl: '/exercises/one-arm-pulldown.gif',
        instructions: '1. Attach single handle to high cable.\n2. Sit or kneel, grab handle with one hand.\n3. Pull handle down toward shoulder.\n4. Squeeze lat at bottom, pause briefly.\n5. Control the weight back up.',
        tips: 'Allows for greater range of motion. Focus on mind-muscle connection with each lat.'
    },
    {
        name: 'Meadows Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Barbell, Landmine Attachment',
        diagramUrl: '/exercises/meadows-row.gif',
        instructions: '1. Set up barbell in landmine or corner.\n2. Stand perpendicular to bar, staggered stance.\n3. Grip end of barbell with one hand.\n4. Row the bar up toward hip, elbow high.\n5. Lower with control.',
        tips: 'Named after John Meadows. Great for lat stretch and contraction. Use straps if needed.'
    },
    {
        name: 'Wide Grip Cable Row',
        category: 'Strength',
        muscleGroup: 'Back',
        equipment: 'Cable Machine, Wide Bar',
        diagramUrl: '/exercises/wide-cable-row.gif',
        instructions: '1. Attach wide bar to low cable.\n2. Sit with feet on platform, knees slightly bent.\n3. Grip bar wider than shoulders, arms extended.\n4. Pull bar to lower chest, elbows flared.\n5. Squeeze back, return with control.',
        tips: 'Targets upper back and rear delts more than close grip. Keep torso stable.'
    },
    // ==================== SHOULDERS ====================
    {
        name: 'Overhead Press',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Barbell',
        diagramUrl: '/exercises/overhead-press.gif',
        instructions: '1. Hold barbell at shoulder height, grip just outside shoulders.\n2. Brace core and squeeze glutes.\n3. Press bar straight overhead.\n4. Lock out arms at top.\n5. Lower bar with control to shoulders.',
        tips: 'Keep your core tight to protect lower back. Don\'t lean back excessively.'
    },
    {
        name: 'Dumbbell Shoulder Press',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/db-shoulder-press.gif',
        instructions: '1. Sit or stand with dumbbells at shoulder height.\n2. Palms facing forward, elbows below wrists.\n3. Press dumbbells overhead until arms extended.\n4. Lower slowly to starting position.\n5. Keep core engaged throughout.',
        tips: 'Seated version provides more stability. Don\'t flare elbows out too wide.'
    },
    {
        name: 'Lateral Raise',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/lateral-raise.gif',
        instructions: '1. Stand with dumbbells at sides.\n2. Slight bend in elbows throughout.\n3. Raise arms out to sides until parallel to floor.\n4. Pause briefly at top.\n5. Lower with control.',
        tips: 'Use lighter weight with strict form. Lead with elbows, not hands.'
    },
    {
        name: 'Front Raise',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/front-raise.gif',
        instructions: '1. Stand with dumbbells in front of thighs.\n2. Arms mostly straight with slight elbow bend.\n3. Raise one or both arms to shoulder height.\n4. Pause at top.\n5. Lower with control.',
        tips: 'Alternate arms to reduce fatigue. Don\'t swing the weight up.'
    },
    {
        name: 'Reverse Fly',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/reverse-fly.gif',
        instructions: '1. Bend at hips, torso nearly parallel to floor.\n2. Hold dumbbells hanging below chest.\n3. Raise arms out to sides, squeezing rear delts.\n4. Pause at top.\n5. Lower with control.',
        tips: 'Keep a slight bend in elbows. Focus on rear delt contraction, not weight.'
    },
    {
        name: 'Arnold Press',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/arnold-press.gif',
        instructions: '1. Hold dumbbells at shoulder height, palms facing you.\n2. Press up while rotating palms to face forward.\n3. At top, palms face forward, arms extended.\n4. Reverse the motion back down.\n5. Rotate palms back to facing you at bottom.',
        tips: 'Great for hitting all three delt heads. Use controlled rotation throughout.'
    },
    {
        name: 'Upright Row',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Barbell or Dumbbells',
        diagramUrl: '/exercises/upright-row.gif',
        instructions: '1. Hold weight with narrow grip in front of thighs.\n2. Pull weight up along your body.\n3. Lead with elbows, bring to shoulder height.\n4. Pause at top.\n5. Lower with control.',
        tips: 'Wide grip is easier on shoulders. Stop if you feel impingement pain.'
    },
    {
        name: 'Shrugs',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Barbell or Dumbbells',
        diagramUrl: '/exercises/shrugs.gif',
        instructions: '1. Hold weight at sides or in front.\n2. Keep arms straight throughout.\n3. Elevate shoulders straight up toward ears.\n4. Squeeze traps at top.\n5. Lower with control.',
        tips: 'Don\'t roll shoulders. Straight up and down only. Pause at top for better contraction.'
    },
    {
        name: 'Cable Lateral Raise',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-lateral-raise.gif',
        instructions: '1. Set cable to lowest position with single handle.\n2. Stand sideways to machine, grab handle with far hand.\n3. Raise arm out to side until parallel to floor.\n4. Pause briefly at top.\n5. Lower with control.',
        tips: 'Constant tension throughout the movement. Can also do behind the back variation.'
    },
    {
        name: 'Machine Lateral Raise',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Lateral Raise Machine',
        diagramUrl: '/exercises/machine-lateral-raise.gif',
        instructions: '1. Adjust seat height so pads rest on upper arms.\n2. Sit with back against pad, grip handles.\n3. Raise arms out to sides by pushing against pads.\n4. Pause at top when arms are parallel to floor.\n5. Lower with control.',
        tips: 'Great for isolating side delts with consistent resistance. Don\'t use momentum.'
    },
    {
        name: 'Cable Reverse Fly',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-reverse-fly.gif',
        instructions: '1. Set cables to shoulder height, no attachments.\n2. Stand in center, cross arms to grab opposite cables.\n3. Step back slightly, arms extended in front.\n4. Pull arms back and out, squeezing rear delts.\n5. Return to start with control.',
        tips: 'Constant cable tension is great for rear delt development. Keep slight bend in elbows.'
    },
    {
        name: 'Reverse Pec Deck',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Pec Deck Machine',
        diagramUrl: '/exercises/reverse-pec-deck.gif',
        instructions: '1. Sit facing the machine pad.\n2. Grip handles with arms extended in front.\n3. Pull handles back, squeezing rear delts.\n4. Pause when arms are in line with body.\n5. Return to start with control.',
        tips: 'Excellent rear delt isolation. Adjust seat so handles are at shoulder height.'
    },
    {
        name: 'Plate Loaded Shoulder Press',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Plate Loaded Shoulder Press Machine',
        diagramUrl: '/exercises/plate-shoulder-press.gif',
        instructions: '1. Adjust seat so handles are at shoulder height.\n2. Load appropriate weight plates.\n3. Grip handles and press overhead.\n4. Lock out arms at top.\n5. Lower with control to starting position.',
        tips: 'Fixed path allows for heavier pressing. Great for building shoulder mass safely.'
    },
    {
        name: 'Cable Y Raise',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-y-raise.gif',
        instructions: '1. Set cables to lowest position.\n2. Cross arms to grab opposite cable handles.\n3. Stand upright, arms at sides.\n4. Raise arms up and out forming a Y shape.\n5. Lower with control.',
        tips: 'Great for lower traps and rear delts. Keep arms relatively straight throughout.'
    },
    {
        name: 'Reverse Cable Crossover',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/reverse-cable-crossover.gif',
        instructions: '1. Set cables to high position.\n2. Stand in center, grab opposite cables (cross pattern).\n3. Step forward, arms crossed in front at chest height.\n4. Pull arms back and down, uncrossing.\n5. Squeeze rear delts, return with control.',
        tips: 'Targets rear delts and upper back. Control the movement, don\'t use momentum.'
    },
    {
        name: 'Machine Shoulder Press',
        category: 'Strength',
        muscleGroup: 'Shoulders',
        equipment: 'Shoulder Press Machine',
        diagramUrl: '/exercises/machine-shoulder-press.gif',
        instructions: '1. Adjust seat so handles are at shoulder height.\n2. Sit with back flat against pad.\n3. Grip handles and press overhead.\n4. Lock out arms without hyperextending.\n5. Lower with control to starting position.',
        tips: 'Fixed path is easier on joints. Great for going to failure safely without a spotter.'
    },
    // ==================== BICEPS ====================
    {
        name: 'Barbell Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Barbell',
        diagramUrl: '/exercises/barbell-curl.gif',
        instructions: '1. Stand with barbell, arms extended, palms forward.\n2. Keep elbows pinned to sides.\n3. Curl bar up toward shoulders.\n4. Squeeze biceps at top.\n5. Lower with control.',
        tips: 'Don\'t swing the weight. Keep upper arms stationary throughout.'
    },
    {
        name: 'Dumbbell Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/dumbbell-curl.gif',
        instructions: '1. Stand with dumbbells at sides, palms forward.\n2. Keep elbows close to body.\n3. Curl weights to shoulders.\n4. Squeeze at top.\n5. Lower with control.',
        tips: 'Can alternate arms or curl together. Supinate (rotate palm up) for more bicep activation.'
    },
    {
        name: 'Hammer Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbells',
        diagramUrl: '/exercises/hammer-curl.gif',
        instructions: '1. Stand with dumbbells at sides, palms facing each other.\n2. Keep palms facing in throughout (neutral grip).\n3. Curl weights toward shoulders.\n4. Squeeze at top.\n5. Lower with control.',
        tips: 'Targets brachialis and forearms more. Great for arm thickness.'
    },
    {
        name: 'Preacher Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'EZ Bar, Preacher Bench',
        diagramUrl: '/exercises/preacher-curl.gif',
        instructions: '1. Sit at preacher bench, armpits at top of pad.\n2. Grip EZ bar or dumbbells.\n3. Lower weight until arms nearly extended.\n4. Curl up squeezing biceps.\n5. Don\'t fully lock out at bottom.',
        tips: 'Eliminates momentum completely. Great isolation exercise.'
    },
    {
        name: 'Concentration Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbell',
        diagramUrl: '/exercises/concentration-curl.gif',
        instructions: '1. Sit on bench, lean forward.\n2. Brace elbow against inner thigh.\n3. Curl dumbbell toward shoulder.\n4. Squeeze at top.\n5. Lower with control.',
        tips: 'Focus on the mind-muscle connection. Great finishing exercise.'
    },
    {
        name: 'Incline Dumbbell Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbells, Incline Bench',
        diagramUrl: '/exercises/incline-db-curl.gif',
        instructions: '1. Sit on incline bench (45-60 degrees).\n2. Let arms hang straight down with dumbbells.\n3. Curl weights without moving upper arms.\n4. Squeeze biceps at top.\n5. Lower with full stretch.',
        tips: 'Great stretch at bottom. Don\'t let elbows drift forward.'
    },
    {
        name: 'Spider Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'EZ Bar or Dumbbells, Incline Bench',
        diagramUrl: '/exercises/spider-curl.gif',
        instructions: '1. Set bench to 45-degree incline.\n2. Lie face down with chest on bench, arms hanging.\n3. Grip weight with palms up.\n4. Curl weight up toward shoulders.\n5. Squeeze at top, lower with control.',
        tips: 'Eliminates momentum completely. Great for bicep peak development.'
    },
    {
        name: 'Bayesian Cable Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/bayesian-curl.gif',
        instructions: '1. Set cable to low position, face away from machine.\n2. Grab handle, step forward so arm is behind body.\n3. Keep elbow stationary behind torso.\n4. Curl handle up toward shoulder.\n5. Squeeze bicep, lower with control.',
        tips: 'Amazing stretch on the bicep. Keep upper arm fixed throughout movement.'
    },
    {
        name: 'Dumbbell Preacher Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbell, Preacher Bench',
        diagramUrl: '/exercises/db-preacher-curl.gif',
        instructions: '1. Sit at preacher bench with one dumbbell.\n2. Rest arm on pad, palm facing up.\n3. Lower dumbbell until arm nearly extended.\n4. Curl up squeezing bicep.\n5. Lower with control, don\'t fully lock out.',
        tips: 'Allows for unilateral focus. Can rotate wrist at top for peak contraction.'
    },
    {
        name: 'Machine Preacher Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Preacher Curl Machine',
        diagramUrl: '/exercises/machine-preacher-curl.gif',
        instructions: '1. Adjust seat so armpits rest at top of pad.\n2. Grip handles with palms up.\n3. Lower handles until arms nearly extended.\n4. Curl up squeezing biceps.\n5. Lower with control.',
        tips: 'Great for consistent resistance curve. Perfect for drop sets and going to failure.'
    },
    {
        name: 'Preacher Hammer Curl',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbells, Preacher Bench',
        diagramUrl: '/exercises/preacher-hammer-curl.gif',
        instructions: '1. Sit at preacher bench with dumbbells.\n2. Rest arms on pad, palms facing each other.\n3. Lower weights until arms nearly extended.\n4. Curl up keeping neutral grip throughout.\n5. Squeeze brachialis at top.',
        tips: 'Targets brachialis for arm thickness. Eliminates momentum like all preacher variations.'
    },
    // ==================== TRICEPS ====================
    {
        name: 'Tricep Pushdown',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/tricep-pushdown.gif',
        instructions: '1. Stand at cable machine, grip bar or rope.\n2. Keep elbows pinned to sides.\n3. Push down until arms fully extended.\n4. Squeeze triceps at bottom.\n5. Let weight return with control.',
        tips: 'Keep elbows stationary. Don\'t lean into the movement.'
    },
    {
        name: 'Skull Crusher',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'EZ Bar or Dumbbells, Bench',
        diagramUrl: '/exercises/skull-crusher.gif',
        instructions: '1. Lie on bench, hold weight above chest.\n2. Keep upper arms vertical.\n3. Bend elbows, lower weight toward forehead.\n4. Extend arms back to starting position.\n5. Keep elbows pointing up throughout.',
        tips: 'Can lower behind head for more stretch. Don\'t flare elbows.'
    },
    {
        name: 'Close-Grip Bench Press',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/close-grip-bench.gif',
        instructions: '1. Lie on bench, grip barbell shoulder-width or narrower.\n2. Lower bar to lower chest.\n3. Keep elbows close to body.\n4. Press back up.\n5. Focus on tricep contraction.',
        tips: 'Don\'t go too narrow - shoulder width is fine. Great compound tricep builder.'
    },
    {
        name: 'Tricep Dip',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dip Bars or Bench',
        diagramUrl: '/exercises/tricep-dip.gif',
        instructions: '1. Grip dip bars, arms extended.\n2. Keep torso upright (not leaning forward).\n3. Lower body by bending elbows.\n4. Stop at 90 degrees or when you feel stretch.\n5. Push back up to starting position.',
        tips: 'Stay upright to target triceps more. Bench dips are easier variation.'
    },
    {
        name: 'Overhead Tricep Extension',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Dumbbell or Cable',
        diagramUrl: '/exercises/overhead-tricep-ext.gif',
        instructions: '1. Hold weight overhead with both hands.\n2. Keep upper arms close to ears.\n3. Lower weight behind head by bending elbows.\n4. Extend arms back up.\n5. Keep upper arms stationary.',
        tips: 'Great stretch for the long head of triceps. Can do single-arm variation.'
    },
    {
        name: 'Diamond Push-Up',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: null,
        diagramUrl: '/exercises/diamond-pushup.gif',
        instructions: '1. Start in push-up position.\n2. Place hands together, forming diamond with thumbs and index fingers.\n3. Lower chest toward hands.\n4. Push back up.\n5. Keep elbows close to body.',
        tips: 'More challenging than regular push-ups. Great tricep activation.'
    },
    {
        name: 'Overhead Cable Triceps Extension (Bar)',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine, Straight Bar',
        diagramUrl: '/exercises/overhead-cable-ext-bar.gif',
        instructions: '1. Set cable to low position with straight bar.\n2. Face away from machine, grip bar overhead.\n3. Step forward, lean slightly forward.\n4. Extend arms overhead, squeezing triceps.\n5. Lower with control behind head.',
        tips: 'Great long head stretch. Keep elbows pointed forward throughout movement.'
    },
    {
        name: 'Barbell Skullcrusher',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/barbell-skullcrusher.gif',
        instructions: '1. Lie on bench, grip barbell with narrow grip.\n2. Start with arms extended above chest.\n3. Bend elbows, lower bar toward forehead.\n4. Keep upper arms stationary.\n5. Extend arms back to start.',
        tips: 'Straight bar requires more wrist flexibility than EZ bar. Great for going heavy.'
    },
    {
        name: 'Katana Cable Triceps Extension',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine, Rope or Single Handle',
        diagramUrl: '/exercises/katana-extension.gif',
        instructions: '1. Set cable to high position.\n2. Stand sideways, grab handle with far hand.\n3. Start with arm bent, hand near opposite shoulder.\n4. Extend arm down and across body like drawing a sword.\n5. Squeeze tricep at full extension.',
        tips: 'Unique angle hits tricep differently. Control the movement, don\'t use momentum.'
    },
    {
        name: 'Smith Machine JM Press',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Smith Machine, Bench',
        diagramUrl: '/exercises/smith-jm-press.gif',
        instructions: '1. Set up bench under Smith machine.\n2. Grip bar with narrow grip.\n3. Lower bar toward upper chest/neck area.\n4. Allow elbows to drift forward slightly.\n5. Press back up focusing on triceps.',
        tips: 'Hybrid of close-grip bench and skull crusher. Smith machine adds stability for learning.'
    },
    {
        name: 'Cable Triceps Kickback',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-kickback.gif',
        instructions: '1. Set cable to low position.\n2. Bend over, grab handle, upper arm parallel to floor.\n3. Keep upper arm stationary.\n4. Extend forearm back, squeezing tricep.\n5. Lower with control.',
        tips: 'Cable provides constant tension unlike dumbbell kickbacks. Great finishing exercise.'
    },
    {
        name: 'Cable Single Arm Pushdown',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine, Single Handle',
        diagramUrl: '/exercises/single-arm-pushdown.gif',
        instructions: '1. Set cable to high position with single handle.\n2. Stand facing machine, grab handle.\n3. Keep elbow pinned to side.\n4. Push down until arm fully extended.\n5. Squeeze tricep, return with control.',
        tips: 'Allows for unilateral focus and mind-muscle connection. Can rotate wrist at bottom.'
    },
    {
        name: 'Triceps Pressdown (Rope)',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Cable Machine, Rope Attachment',
        diagramUrl: '/exercises/rope-pressdown.gif',
        instructions: '1. Attach rope to high cable.\n2. Grip rope with palms facing each other.\n3. Keep elbows pinned to sides.\n4. Push down and spread rope apart at bottom.\n5. Squeeze triceps, return with control.',
        tips: 'Spreading the rope at bottom increases contraction. Great for tricep definition.'
    },
    {
        name: 'JM Press',
        category: 'Strength',
        muscleGroup: 'Arms',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/jm-press.gif',
        instructions: '1. Lie on bench, grip barbell with narrow grip.\n2. Start with arms extended above upper chest.\n3. Lower bar toward neck/upper chest, elbows drifting forward.\n4. Keep elbows at 45-degree angle to body.\n5. Press back up focusing on triceps.',
        tips: 'Named after JM Blakley. Hybrid movement for massive tricep overload. Use moderate weight to learn.'
    },
    // ==================== LEGS ====================
    {
        name: 'Barbell Back Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Barbell, Squat Rack',
        diagramUrl: '/exercises/back-squat.gif',
        instructions: '1. Position bar on upper back/traps.\n2. Stand with feet shoulder-width apart.\n3. Brace core, bend knees and hips together.\n4. Lower until thighs are parallel or below.\n5. Drive through heels to stand.',
        tips: 'Keep chest up and knees tracking over toes. Don\'t let knees cave in.'
    },
    {
        name: 'Front Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Barbell, Squat Rack',
        diagramUrl: '/exercises/front-squat.gif',
        instructions: '1. Rest bar on front delts, elbows high.\n2. Feet shoulder-width apart.\n3. Descend keeping torso very upright.\n4. Go as deep as mobility allows.\n5. Drive up through heels.',
        tips: 'More quad-dominant than back squat. Requires good wrist and ankle mobility.'
    },
    {
        name: 'Leg Press',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Leg Press Machine',
        diagramUrl: '/exercises/leg-press.gif',
        instructions: '1. Sit in leg press, feet shoulder-width on platform.\n2. Release safety handles.\n3. Lower weight by bending knees toward chest.\n4. Stop before lower back rounds.\n5. Press back to start without locking knees.',
        tips: 'Foot placement affects muscle emphasis. Higher = more glutes, lower = more quads.'
    },
    {
        name: 'Romanian Deadlift',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Barbell or Dumbbells',
        diagramUrl: '/exercises/romanian-deadlift.gif',
        instructions: '1. Hold weight in front of thighs.\n2. Push hips back, slight knee bend.\n3. Lower weight along legs until hamstring stretch.\n4. Keep back flat throughout.\n5. Drive hips forward to stand.',
        tips: 'Feel the stretch in hamstrings. Don\'t round your lower back.'
    },
    {
        name: 'Walking Lunge',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Dumbbells (optional)',
        diagramUrl: '/exercises/walking-lunge.gif',
        instructions: '1. Stand tall, step forward into lunge.\n2. Lower until back knee nearly touches ground.\n3. Front knee stays over ankle.\n4. Drive through front heel to step forward.\n5. Alternate legs.',
        tips: 'Keep torso upright. Don\'t let front knee go past toes.'
    },
    {
        name: 'Leg Curl',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Leg Curl Machine',
        diagramUrl: '/exercises/leg-curl.gif',
        instructions: '1. Lie face down on machine.\n2. Position pad just above heels.\n3. Curl heels toward glutes.\n4. Squeeze hamstrings at top.\n5. Lower with control.',
        tips: 'Don\'t lift hips off the pad. Focus on hamstring contraction.'
    },
    {
        name: 'Leg Extension',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Leg Extension Machine',
        diagramUrl: '/exercises/leg-extension.gif',
        instructions: '1. Sit in machine, pad on lower shins.\n2. Grip handles for stability.\n3. Extend legs until straight.\n4. Squeeze quads at top.\n5. Lower with control.',
        tips: 'Don\'t use momentum. Great for quad isolation and pump.'
    },
    {
        name: 'Calf Raise',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Calf Raise Machine or Step',
        diagramUrl: '/exercises/calf-raise.gif',
        instructions: '1. Position balls of feet on edge of platform.\n2. Lower heels below platform for stretch.\n3. Push through balls of feet to raise up.\n4. Squeeze calves at top.\n5. Lower with control.',
        tips: 'Full range of motion is key. Pause at top and bottom.'
    },
    {
        name: 'Hip Thrust',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Barbell, Bench',
        diagramUrl: '/exercises/hip-thrust.gif',
        instructions: '1. Sit on ground, upper back against bench.\n2. Roll barbell over hips (use pad).\n3. Feet flat, knees bent 90 degrees.\n4. Drive hips up until body is straight.\n5. Squeeze glutes at top, lower with control.',
        tips: 'Best glute builder. Keep chin tucked, don\'t hyperextend lower back.'
    },
    {
        name: 'Bulgarian Split Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Dumbbells, Bench',
        diagramUrl: '/exercises/bulgarian-split-squat.gif',
        instructions: '1. Stand 2 feet in front of bench.\n2. Place back foot on bench behind you.\n3. Lower until back knee nearly touches ground.\n4. Front knee stays over ankle.\n5. Drive through front heel to stand.',
        tips: 'Challenging balance exercise. Start without weight to learn movement.'
    },
    {
        name: 'Goblet Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Dumbbell or Kettlebell',
        diagramUrl: '/exercises/goblet-squat.gif',
        instructions: '1. Hold weight at chest, elbows down.\n2. Feet slightly wider than shoulder-width.\n3. Squat down between your legs.\n4. Keep chest up, back flat.\n5. Drive through heels to stand.',
        tips: 'Great for learning squat form. Weight acts as counterbalance.'
    },
    {
        name: 'Smith Machine Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Smith Machine',
        diagramUrl: '/exercises/smith-squat.gif',
        instructions: '1. Position bar on upper back/traps.\n2. Feet slightly forward of bar.\n3. Unrack and squat down, keeping back against bar.\n4. Lower until thighs parallel or below.\n5. Drive through heels to stand.',
        tips: 'Fixed path allows focus on quads. Can place feet further forward than regular squat.'
    },
    {
        name: 'Seated Hamstring Curl',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Seated Leg Curl Machine',
        diagramUrl: '/exercises/seated-ham-curl.gif',
        instructions: '1. Sit in machine, back against pad.\n2. Position pad above heels, thigh pad on lap.\n3. Curl heels down and under the seat.\n4. Squeeze hamstrings at full contraction.\n5. Return with control.',
        tips: 'Seated position provides great hamstring stretch. Don\'t use momentum.'
    },
    {
        name: 'Hack Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Hack Squat Machine',
        diagramUrl: '/exercises/hack-squat.gif',
        instructions: '1. Position shoulders under pads, back against pad.\n2. Feet shoulder-width on platform.\n3. Release safety and lower by bending knees.\n4. Go as deep as mobility allows.\n5. Drive through heels to stand.',
        tips: 'Great quad builder. Foot position changes emphasis - lower = more quads.'
    },
    {
        name: 'Pendulum Squat',
        category: 'Strength',
        muscleGroup: 'Legs',
        equipment: 'Pendulum Squat Machine',
        diagramUrl: '/exercises/pendulum-squat.gif',
        instructions: '1. Position shoulders under pads.\n2. Feet on platform, slightly forward.\n3. Release safety, lower by bending knees.\n4. The arc motion allows deeper squatting.\n5. Drive up through the natural arc path.',
        tips: 'Unique arc motion is easier on lower back. Excellent for quad development and depth.'
    },
    // ==================== CORE ====================
    {
        name: 'Plank',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: null,
        diagramUrl: '/exercises/plank.gif',
        instructions: '1. Start in forearm plank position.\n2. Elbows under shoulders, body straight.\n3. Engage core, squeeze glutes.\n4. Hold position without sagging or piking.\n5. Breathe steadily throughout.',
        tips: 'Quality over quantity. Keep hips level with shoulders.'
    },
    {
        name: 'Bicycle Crunch',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: null,
        diagramUrl: '/exercises/bicycle-crunch.gif',
        instructions: '1. Lie on back, hands behind head.\n2. Lift shoulders off ground.\n3. Bring right elbow to left knee.\n4. Extend right leg straight.\n5. Alternate sides in pedaling motion.',
        tips: 'Don\'t pull on your neck. Focus on rotating through the core.'
    },
    {
        name: 'Russian Twist',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: 'Medicine Ball or Weight (optional)',
        diagramUrl: '/exercises/russian-twist.gif',
        instructions: '1. Sit with knees bent, feet off floor.\n2. Lean back slightly, back straight.\n3. Hold weight at chest or clasp hands.\n4. Rotate torso side to side.\n5. Touch floor beside hip each side.',
        tips: 'Keep chest up. Movement comes from rotating core, not arms.'
    },
    {
        name: 'Hanging Leg Raise',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: 'Pull-Up Bar',
        diagramUrl: '/exercises/hanging-leg-raise.gif',
        instructions: '1. Hang from bar with straight arms.\n2. Keep legs straight or slightly bent.\n3. Raise legs until parallel to floor (or higher).\n4. Lower with control.\n5. Avoid swinging.',
        tips: 'Harder variation: keep legs straight. Easier: do knee raises.'
    },
    {
        name: 'Dead Bug',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: null,
        diagramUrl: '/exercises/dead-bug.gif',
        instructions: '1. Lie on back, arms toward ceiling.\n2. Knees bent 90 degrees, shins parallel to floor.\n3. Lower opposite arm and leg toward floor.\n4. Keep lower back pressed into floor.\n5. Return and alternate sides.',
        tips: 'Great for core stability. Don\'t let lower back arch.'
    },
    {
        name: 'Ab Wheel Rollout',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: 'Ab Wheel',
        diagramUrl: '/exercises/ab-wheel.gif',
        instructions: '1. Kneel on floor, grip ab wheel.\n2. Brace core tightly.\n3. Roll wheel forward, extending body.\n4. Go as far as you can control.\n5. Pull back to starting position.',
        tips: 'Very challenging. Start with partial range of motion.'
    },
    {
        name: 'Cable Woodchop',
        category: 'Strength',
        muscleGroup: 'Core',
        equipment: 'Cable Machine',
        diagramUrl: '/exercises/cable-woodchop.gif',
        instructions: '1. Set cable to high position.\n2. Stand sideways to machine.\n3. Pull handle diagonally across body.\n4. Rotate through core and hips.\n5. Control the return.',
        tips: 'Keep arms relatively straight. Power comes from core rotation.'
    },
    // ==================== CARDIO ====================
    {
        name: 'Treadmill Running',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: 'Treadmill',
        diagramUrl: '/exercises/treadmill.gif',
        instructions: '1. Start at walking pace to warm up.\n2. Gradually increase speed.\n3. Maintain upright posture.\n4. Land midfoot, not heel.\n5. Cool down with walking.',
        tips: 'Don\'t hold the handles. Use incline for more intensity.'
    },
    {
        name: 'Stationary Bike',
        category: 'Cardio',
        muscleGroup: 'Legs',
        equipment: 'Stationary Bike',
        diagramUrl: '/exercises/stationary-bike.gif',
        instructions: '1. Adjust seat height - slight bend in knee at bottom.\n2. Start pedaling at easy pace.\n3. Increase resistance or speed as desired.\n4. Keep core engaged.\n5. Cool down at low resistance.',
        tips: 'Great low-impact option. Try intervals for more challenge.'
    },
    {
        name: 'Rowing Machine',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: 'Rowing Machine',
        diagramUrl: '/exercises/rowing.gif',
        instructions: '1. Sit on rower, feet strapped in.\n2. Push with legs first, then pull with back.\n3. Finish by pulling handle to lower chest.\n4. Reverse: extend arms, hinge forward, bend knees.\n5. Maintain fluid motion.',
        tips: 'Drive through legs first. Don\'t yank with arms at the start.'
    },
    {
        name: 'Jump Rope',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: 'Jump Rope',
        diagramUrl: '/exercises/jump-rope.gif',
        instructions: '1. Hold handles at hip height.\n2. Rotate rope with wrists, not arms.\n3. Jump just high enough to clear rope.\n4. Land softly on balls of feet.\n5. Keep elbows close to sides.',
        tips: 'Start slow. Excellent for coordination and conditioning.'
    },
    {
        name: 'Burpee',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: null,
        diagramUrl: '/exercises/burpee.gif',
        instructions: '1. Start standing.\n2. Drop into squat, place hands on floor.\n3. Jump feet back to plank position.\n4. Perform a push-up (optional).\n5. Jump feet forward and explode up.',
        tips: 'Scale by removing push-up or jump. Full body conditioning.'
    },
    {
        name: 'Mountain Climbers',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: null,
        diagramUrl: '/exercises/mountain-climbers.gif',
        instructions: '1. Start in plank position.\n2. Drive one knee toward chest.\n3. Quickly switch legs.\n4. Continue alternating rapidly.\n5. Keep hips low and core tight.',
        tips: 'Keep shoulders over wrists. Don\'t let hips bounce up.'
    },
    {
        name: 'Box Jump',
        category: 'Plyometric',
        muscleGroup: 'Legs',
        equipment: 'Plyo Box',
        diagramUrl: '/exercises/box-jump.gif',
        instructions: '1. Stand facing box, feet shoulder-width.\n2. Swing arms back, bend knees.\n3. Explode up, swing arms forward.\n4. Land softly on box with both feet.\n5. Step down (don\'t jump down).',
        tips: 'Start with lower box. Focus on soft, controlled landings.'
    },
    {
        name: 'Battle Ropes',
        category: 'Cardio',
        muscleGroup: 'Full Body',
        equipment: 'Battle Ropes',
        diagramUrl: '/exercises/battle-ropes.gif',
        instructions: '1. Hold rope ends, slight squat stance.\n2. Alternate arms up and down rapidly.\n3. Create waves that travel to anchor.\n4. Keep core braced throughout.\n5. Vary patterns: waves, slams, circles.',
        tips: 'Great HIIT finisher. Try different patterns for variety.'
    },
    // ==================== FLEXIBILITY ====================
    {
        name: 'Standing Hamstring Stretch',
        category: 'Flexibility',
        muscleGroup: 'Legs',
        equipment: null,
        diagramUrl: '/exercises/hamstring-stretch.gif',
        instructions: '1. Stand tall, feet together.\n2. Hinge at hips, reach toward toes.\n3. Keep legs straight or slightly bent.\n4. Feel stretch in hamstrings.\n5. Hold for 30-60 seconds.',
        tips: 'Don\'t bounce. Breathe deeply and relax into the stretch.'
    },
    {
        name: 'Pigeon Pose',
        category: 'Flexibility',
        muscleGroup: 'Legs',
        equipment: null,
        diagramUrl: '/exercises/pigeon-pose.gif',
        instructions: '1. Start in plank or downward dog.\n2. Bring right knee forward behind right wrist.\n3. Extend left leg straight back.\n4. Lower hips toward floor.\n5. Hold, then switch sides.',
        tips: 'Great hip opener. Use a block under hip if needed.'
    },
    {
        name: 'Cat-Cow Stretch',
        category: 'Flexibility',
        muscleGroup: 'Back',
        equipment: null,
        diagramUrl: '/exercises/cat-cow.gif',
        instructions: '1. Start on hands and knees.\n2. Cow: Drop belly, lift head and tailbone.\n3. Cat: Round back, tuck chin and tailbone.\n4. Flow between positions with breath.\n5. Inhale for cow, exhale for cat.',
        tips: 'Great warm-up for the spine. Move slowly and controlled.'
    },
    {
        name: 'Child\'s Pose',
        category: 'Flexibility',
        muscleGroup: 'Back',
        equipment: null,
        diagramUrl: '/exercises/childs-pose.gif',
        instructions: '1. Kneel on floor, big toes touching.\n2. Sit back on heels.\n3. Fold forward, extending arms in front.\n4. Rest forehead on floor.\n5. Breathe deeply, hold 1-2 minutes.',
        tips: 'Great rest position. Widens knees for deeper stretch.'
    },
    {
        name: 'Chest Doorway Stretch',
        category: 'Flexibility',
        muscleGroup: 'Chest',
        equipment: 'Doorway',
        diagramUrl: '/exercises/doorway-stretch.gif',
        instructions: '1. Stand in doorway.\n2. Place forearms on door frame, elbows at 90°.\n3. Step forward through doorway.\n4. Feel stretch in chest and shoulders.\n5. Hold 30-60 seconds.',
        tips: 'Adjust arm height to target different parts of chest.'
    },
    {
        name: 'Figure Four Stretch',
        category: 'Flexibility',
        muscleGroup: 'Legs',
        equipment: null,
        diagramUrl: '/exercises/figure-four.gif',
        instructions: '1. Lie on back.\n2. Cross right ankle over left knee.\n3. Pull left thigh toward chest.\n4. Feel stretch in right glute/hip.\n5. Hold 30-60 seconds, switch sides.',
        tips: 'Great for tight hips and glutes. Keep head on floor.'
    }
];
async function main() {
    console.log('🌱 Starting seed...');
    // Clear existing exercises
    console.log('Clearing existing exercises...');
    await prisma.exercise.deleteMany({});
    // Insert all exercises
    console.log(`Inserting ${exercises.length} exercises...`);
    for (const exercise of exercises) {
        await prisma.exercise.create({
            data: exercise
        });
        console.log(`  ✓ ${exercise.name}`);
    }
    console.log(`\n✅ Successfully seeded ${exercises.length} exercises!`);
    // Summary by category
    const categories = exercises.reduce((acc, ex) => {
        acc[ex.category] = (acc[ex.category] || 0) + 1;
        return acc;
    }, {});
    console.log('\n📊 Summary by category:');
    Object.entries(categories).forEach(([cat, count]) => {
        console.log(`   ${cat}: ${count}`);
    });
    // Summary by muscle group
    const muscleGroups = exercises.reduce((acc, ex) => {
        acc[ex.muscleGroup] = (acc[ex.muscleGroup] || 0) + 1;
        return acc;
    }, {});
    console.log('\n💪 Summary by muscle group:');
    Object.entries(muscleGroups).forEach(([group, count]) => {
        console.log(`   ${group}: ${count}`);
    });
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
