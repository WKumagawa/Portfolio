//list of positive inspirational messages
const posInsp = ['"Believe you can, and you\'re halfway there." - Theodore Roosevelt', '"The only way to do great work is to love what you do." - Steve Jobs', '"Embrace the glorious mess that you are." - Elizabeth Gilbert', '"Every moment is a fresh beginning." - T.S. Eliot', '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill', '"You are never too old to set another goal or dream a new dream." - C.S. Lewis', '"Happiness is not by chance, but by choice."', '"In the middle of difficulty lies opportunity." - Albert Einstein', '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt', '"Your time is limited, don\'t waste it living someone else\'s life." - Steve Jobs', '"Be yourself; everyone else is already taken." - Oscar Wilde', '"Challenges are what make life interesting and overcoming them is what makes life meaningful." - Joshua J. Marine', '"The best way to predict the future is to create it." - Peter Drucker', '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt', '"You are braver than you believe, stronger than you seem, and smarter than you think." - A.A. Milne', '"Success is stumbling from failure to failure with no loss of enthusiasm." - Winston S. Churchill', '"Difficult roads often lead to beautiful destinations."', '"The only person you should try to be better than is the person you were yesterday."', '"Life is 10% what happens to us and 90% how we react to it." - Charles R. Swindoll', '"You have within you right now, everything you need to deal with whatever the world can throw at you." - Brian Tracy', '"Opportunities are usually disguised as hard work, so most people don\'t recognize them." - Ann Landers', '"The secret of getting ahead is getting started." - Mark Twain', '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama', '"You are the architect of your life; build it the way you want."', '"Remember that not getting what you want is sometimes a wonderful stroke of luck." - Dalai Lama']
//console.log(`Number of posInsp: ${posInsp.length}`)
//list of negative inspirational messages
const negInsp = ["Sometimes the hardest lessons teach the most.","Adversity reveals our strengths we didn't know we had.","Mistakes are proof that you're trying, but they're not your definition.","Failure is a detour, not a dead-end street.","Challenges are opportunities in disguise.","The darkest nights often produce the brightest stars.","Pain can be a catalyst for growth.","The scars you bear are the sign of a competitor.","Setbacks are setups for comebacks.","It's okay not to be okay, but it's not okay to give up.","Your struggles don't define you; they refine you.","Sometimes the toughest battles are given to the strongest soldiers.","Rock bottom can be the solid foundation on which you rebuild your life.","Failure is a stepping stone to success.","Even in the darkest moments, there's a glimmer of hope.","The toughest challenges often lead to the greatest rewards.","Storms don't last forever; they make way for sunshine.","Pain may be inevitable, but suffering is optional.","Tough times never last, tough people do.","Failure isn't fatal; it's a necessary stepping stone.","Struggles today build strength for tomorrow.","Your past doesn't define your future; your actions do.","Every setback is a setup for a comeback.","Life's difficulties often become the seeds of future success.","Adversity introduces a person to themselves."]
//console.log(`Number of negInsp: ${negInsp.length}`)
//list of neutral inspirational messages
const neuInsp = ["Embrace the journey, wherever it may lead.","Find strength in the midst of uncertainty.","Every experience holds a lesson worth learning.","Strive for progress, not perfection.","Balance is the key to a well-lived life.","Embrace the ebb and flow of life's changes.","Discover the beauty in life's simple moments.","Stay focused on the present; it's where your power lies.","Adaptability is a key ingredient for success.","Cherish the process as much as the outcome.","Celebrate your uniqueness; it's your greatest strength.","Learn to dance in the rain instead of waiting for the storm to pass.","Be open to new perspectives and possibilities.","Practice gratitude for the small blessings in life.","Discover your own path and walk it confidently.","Patience is a virtue that leads to great rewards.","Quiet the mind; peace resides in the stillness.","Focus on what you can control and let go of what you can't.","Seek understanding in moments of confusion.","Allow yourself grace; mistakes are part of growth.","Challenge yourself, but also be kind to yourself.","Listen to your intuition; it often knows the way.","Value progress over comparison; everyone's journey is unique.","Build resilience; it's the foundation of inner strength."
,"Live authentically; your true self is your greatest gift to the world."]
//console.log(`Number of neuInsp: ${neuInsp.length}`)
//list of mixed inspiratinal messages
const genInsp = ["Dream big and dare to fail.","Your attitude determines your direction in life.","Create your own sunshine on a cloudy day.","Find joy in the journey, not just the destination.","Believe in your potential; it's limitless.","Every day is a chance to start anew.","Stay true to yourself; authenticity is magnetic.","Kindness is a language that everyone understands.","The present moment is a gift; embrace it fully.","Success begins with a single step forward.","The power of positive thinking can change your life.","Make each day count; you're writing your story.","Celebrate progress, no matter how small.","You have the strength to overcome any obstacle.","Strive for excellence, not perfection.","Your passion is the fuel for your dreams.","Gratitude turns what we have into enough.","Trust the timing of your life's journey.","Be the reason someone believes in the goodness of people.","Optimism is the faith that leads to achievement.","You are capable of more than you know.","Chase your goals with determination and persistence.","The world needs your unique contribution.","In every setback, there's a hidden opportunity.","Stay focused on your goals, even during tough times."]
//console.log(`Number of genInsp: ${genInsp.length}`)
//random number generators for messages
const messageType = () => {
    return Math.floor(Math.random()*4)-1
}
const message = () => {
    return Math.floor(Math.random()*25)-1
}
//message output

const insp = messageType()
const ind = message()

if (insp === 0) {
    console.log(posInsp[ind])
} else if (insp === 1) {
    console.log(negInsp[ind])
} else if (insp === 2) {
    console.log(neuInsp[ind])
} else if (insp === 3) {
    console.log(genInsp[ind])
} else {
    console.log('FATAL ERROR')
}