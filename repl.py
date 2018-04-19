from __future__ import unicode_literals
from prompt_toolkit import prompt

dict = {"Java":"java", "Python":"py", "C++":"cpp", "C":"cpp", "C":"cs", "R":"r", "PHP":"php"}


text1 = prompt('Select a Programming Language:')
text2 = prompt('Select a Paradigm: ')
text3 = prompt('Select a Design Pattern: ')

if (text1 == "Java"):
    test_file = open("output.java", "wb")
elif (text1 == "Python"):
    test_file = open("output.py", "wb")
elif (text1 == "C++"):
    test_file = open("output.cpp", "wb")
elif (text1 == "C"):
    test_file = open("output.cpp", "wb")
elif (text1 == "C#"):
    test_file = open("output.cs", "wb")
elif (text1 == "R"):
    test_file = open("output.r", "wb")
elif (text1 == "PHP"):
    test_file = open("output.php", "wb")
else:
    print("User Input Error!")

test_file.write(bytes(" world", 'UTF-8'))
test_file.close()



