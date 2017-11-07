apples = 14
puts apples

puts "I have #{apples} apples."

# ===========================

materials = ['wood', 'metal', 'stone']
words = {
  'elephant' => "The world's largest land mammal.",
  'school' => 'A place of learning.',
  'ice cream' => 'A delicious milk-based dessert.',
}

puts "==========================="

num = 16
if num > 10
  puts "#{num} is greater than 10."
elsif num == 10
  puts "#{num} is exactly 10."
else
  puts "#{num} must be less than 10."
end

puts "==========================="

10.times do
  puts "Doing the same thing over and over."
end

puts "==========================="

base = 5
20.times do |num|
  puts num + base
end

puts "==========================="

total = 0
100.times do |num|
  total += num
end
puts total
