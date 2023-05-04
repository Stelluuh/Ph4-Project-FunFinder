
puts 'Seeding database...'
# activities
Activity.create(name: "Swimming Lessons", description: "Learn to swim with our certified instructors", childs_age: 5, duration: 30)
Activity.create(name: "Art Class", description: "Explore your creativity through painting, drawing and more", childs_age: 7, duration: 60)
Activity.create(name: "Soccer Practice", description: "Improve your soccer skills and have fun with friends", childs_age: 8, duration: 45)

# users
User.create(name: "John Smith", username: "johnsmith", password: "password")
User.create(name: "Jane Doe", username: "janedoe", password: "password")

# schedules
Schedule.create(time_of_day: "Morning", user_id: 1, activity_id: 1)
Schedule.create(time_of_day: "Afternoon", user_id: 1, activity_id: 2)
Schedule.create(time_of_day: "Evening", user_id: 2, activity_id: 3)

puts 'Seeded database!'



# puts 'Seeding database...'
# # activities
# activity1 = Activity.create(name: "Swimming Lessons", description: "Learn to swim with our certified instructors", childs_age: 5, duration: 30)
# Activity.create(name: "Art Class", description: "Explore your creativity through painting, drawing and more", childs_age: 7, duration: 60)
# Activity.create(name: "Soccer Practice", description: "Improve your soccer skills and have fun with friends", childs_age: 8, duration: 45)

# # users

# user1=User.create(name: "John Smith", username: "johnsmith", password: "password", password_confirmation: "password")
# User.create(name: "Jane Doe", username: "janedoe", password: "password", password_confirmation: "password")

# # schedules
# schedule1=Schedule.create(time_of_day: "Morning", user_id: user1.id, activity_id: activity1.id)
# Schedule.create(time_of_day: "Afternoon", user_id: 1, activity_id: 2)
# Schedule.create(time_of_day: "Evening", user_id: 2, activity_id: 3)
# byebug
# puts 'Seeded database!'