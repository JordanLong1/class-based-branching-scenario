import firstImage from '../Learning Images/first-learning-img.png';
import brainMap from '../Learning Images/brain-map.jpg';
import rocketLearning from '../Learning Images/rocket-learning.jpg';
import pencilLearning from '../Learning Images/pencil-learning.jpg';
import hybridLearning from '../Learning Images/hybrid-learning.jpg';
import jugglingSkills from '../Learning Images/juggling-skills.jpg';
import classroomLearning from '../Learning Images/classroom-learning.png';
import partnerLearning from '../Learning Images/partner-learning.jpeg';
import learningInSteps from '../Learning Images/learning-4-steps.jpg';
import eLearning from '../Learning Images/e-learning.jpg';
import readinImg from '../Learning Images/reading-img.png';
import learningGif from '../Learning Images/learning.gif';
import musicLearning from '../Learning Images/music-learning.png';
import brainImg from '../Learning Images/brain-img.jpg';

export const questionsAndOptions = [
    {questionId: 1, 
        questionTitle: 'How do you think you learn best?', 
        questionImage: firstImage,
        options: [
            { 
           optionTitle: 'Online learning', // almost finished need something for null.
             pointsTo: 2, 
             typeOfAnswer: 'A'
            }, 
            {
            optionTitle: 'In person / Face-face interaction', // done here for now. 
            pointsTo: 3, 
            typeOfAnswer: 'B',             
            }, 
            {
            optionTitle: 'Combination of both', // needs more
            pointsTo: 4, 
            typeOfAnswer: 'C'
            }
        ], 
    }, 
    {
        questionId: 2, 
        questionTitle: 'What works better for you when studying for a test?', 
        questionImage: brainMap,
        options: [
            {optionTitle: 'Memorizing contents of index cards', 
            pointsTo: 5, 
            typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Read the book(s) or your notes', 
                pointsTo: 6, 
                typeOfAnswer: 'B'                

            }
        
             ]
        }, 

    {
        questionId: 3, 
        questionTitle: 'Which method would you prefer over the other?', 
        questionImage: pencilLearning,
        options: [
            {
             optionTitle: 'Learning by doing. Hands on experience', 
            pointsTo: 7, 
            typeOfAnswer: 'C'
            }, 
        {
            optionTitle: 'Learning by observing or watching someone do the task', 
            pointsTo: 8, 
            typeOfAnswer: 'A'
        }
        ]
    }, 

    {
        questionId: 4, 
        questionTitle: 'When choosing a career area of study, I would:', 
        questionImage: rocketLearning,
        options: [
            {
                optionTitle: 'Work with designs, maps or charts.',
                pointsTo: 9, 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Use words well in written communications.', 
                pointsTo: 10, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'A little bit of both.', 
                pointsTo: 11, 
                typeOfAnswer: 'C'
            }, 
           
        ]
    }, 
    {
        questionId: 5, 
        questionTitle: 'When you approach learning something new, which method do you prefer?', 
        questionImage: hybridLearning,
        options: [
            {
                optionTitle: 'Watching a video explanation.',
                pointsTo: 0,  // end
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Reading an article, blog, or book on the topic', 
                pointsTo: 10, // end of branch
                typeOfAnswer: 'B'
            }, 
        ]
    }, 
    {
        questionId: 6, // B points here.
        questionTitle: 'You want to put together a new desk from Ikea, how would you approach the task?', 
        questionImage: jugglingSkills,
        options: [
            {
                optionTitle: 'Start with the directions given.',
                pointsTo: 12, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: `Search "how to" on Youtube.`, 
                pointsTo: 13, 
                typeOfAnswer: 'A'
            }, 
        ]
    }, 
    {
        questionId: 7, 
        questionTitle: 'What sort of school assignments do you enjoy the most? ', 
        questionImage: classroomLearning,
        options: [
            {
                optionTitle: 'Memorizing assignments, video lectures, watching and listening to the teacher give a lecture.',
                pointsTo: 0, // end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Writing essays, book reports, written tests.', 
                pointsTo: 14, // end
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'A little bit of both.', 
                pointsTo: 0, // end
                typeOfAnswer: 'C'
            }, 
        ]
    }, 

    {
        questionId: 8, 
        questionTitle: 'What is the best way for you to remember your friends phone number?', 
        questionImage: partnerLearning,
        options: [
            {
                optionTitle: 'Picture the numbers on your phone.',
                pointsTo: 15,  // end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Write it down on a piece of paper. ', 
                pointsTo: 0, // end
                typeOfAnswer: 'B'
            }, 
        ]
    }, 

    {
        questionId: 9, 
        questionTitle: 'A website has a video showing how to make a special graph or chart. There is a person speaking, some lists and words describing what to do and some diagrams. I would learn most from:', 
        questionImage: learningInSteps,
        options: [
            {
                optionTitle: 'Watching the actions',
                pointsTo: 0 ,// end 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: 'Reading the captions', 
                pointsTo: 0, // end
                typeOfAnswer: 'B'
            }, 

            {
                optionTitle: 'Seeing the diagrams.', 
                pointsTo: 0,  // end
                typeOfAnswer: 'A'
            }, 
        ]
    }, 
    {
        questionId: 10, 
        questionTitle: 'You find reading:', 
        questionImage: readinImg,
        options: [
            {
                optionTitle: 'The best and most relaxing thing ever.',
                pointsTo: 0 ,// end 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: `Takes too long; you'd rather watch a video`, 
                pointsTo: 0, // end
                typeOfAnswer: 'C'
            }, 

            {
                optionTitle: `You'd rather be outside working on something or doing something else.`, 
                pointsTo: 0,  // end
                typeOfAnswer: 'C'
            }, 
        ]
    }, 
    {
        questionId: 11, 
        questionTitle: `When you see or hear the word "cat", what do you do?`, 
        options: [
            {
                optionTitle: 'Picture a cat in your mind', 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: `Say the word "cat" to yourself.`, 
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'Think about being with a cat', 
                pointsTo: 0, 
                typeOfAnswer: 'C'
            }
        ]
    }, 
    {
        questionId: 12, 
        questionTitle: `Do you enjoy charts and graphs?`, 
        questionImage: learningGif,
        options: [
            {
                optionTitle: `No, I can't stand working with them.`, 
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: 'Yes I love them!', 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }
        ]
    }, 
    {
        questionId: 13, 
        questionTitle: `Which technique helped you learn multiplication tabeles the best?`, 
        questionImage: eLearning,
        options: [
            {
                optionTitle: `Writing them out over and over.`, 
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: `Quickly reviewing flashcards.`, 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: `Practicing out loud with a friend.`, 
                pointsTo: 0, 
                typeOfAnswer: 'C'
            }
        ]
    }, 
    {
        questionId: 14, 
        questionTitle: `When asked to give directions, I:`, 
        questionImage: brainImg,
        options: [
            {
                optionTitle: `A combination of the two answers below.`, 
                pointsTo: 0, 
                typeOfAnswer: 'C'
            }, 
            {
                optionTitle: `See the actual places in my mind or prefer to draw them`, 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }, 
            {
                optionTitle: `Prefer to write them down on a piece of paper.`, 
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }
        ]
    }, 
    {
        questionId: 15, 
        questionTitle: `When listening to music, which method do you prefer?`, 
        questionImage: musicLearning,
        options: [
            {
                optionTitle: `Just listening to the song without the video.`, 
                pointsTo: 0, 
                typeOfAnswer: 'B'
            }, 
            {
                optionTitle: `Watching the music video.`, 
                pointsTo: 0, 
                typeOfAnswer: 'A'
            }
        ]
    }
]

