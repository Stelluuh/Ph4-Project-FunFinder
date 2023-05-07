
puts 'Seeding database...'
# activities
activity1 = Activity.create(name: "Swimming Lessons", description: "Learn to swim with our certified instructors", childs_age: 5, duration: 30)
activity2 = Activity.create(name: "Art Class", description: "Explore your creativity through painting, drawing and more", childs_age: 7, duration: 60)
activity3 = Activity.create(name: "Soccer Practice", description: "Improve your soccer skills and have fun with friends", childs_age: 8, duration: 45)
activity4 = Activity.create(name: "Piano Lessons", description: "Learn to play the piano with our experienced instructors", childs_age: 6, duration: 45)
activity5 = Activity.create(name: "Cooking Class", description: "Discover the joys of cooking and baking", childs_age: 10, duration: 60)
activity6 = Activity.create(name: "Basketball Practice", description: "Train with our coaches and improve your basketball skills", childs_age: 12, duration: 90)
activity7 = Activity.create(name: "Dance Class", description: "Explore different dance styles and express yourself through movement", childs_age: 9, duration: 60)
activity8 = Activity.create(name: "Yoga for Kids", description: "Experience the benefits of yoga and mindfulness", childs_age: 7, duration: 30)


# users

user1=User.create(name: "John Smith", username: "johnsmith", password: "password", password_confirmation: "password")
user2=User.create(name: "Jane Doe", username: "janedoe", password: "password", password_confirmation: "password")

# schedules
schedule1=Schedule.create(time_of_day: "Morning", user_id: user1.id, activity_id: activity1.id)
schedule2=Schedule.create(time_of_day: "Afternoon", user_id: user1.id, activity_id: activity2.id)
schedule3=Schedule.create(time_of_day: "Evening", user_id: user2.id, activity_id: activity3.id)
byebug
puts 'Seeded database!'