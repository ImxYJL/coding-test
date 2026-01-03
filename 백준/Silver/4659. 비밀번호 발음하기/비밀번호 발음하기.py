import sys
input = sys.stdin.readline

def is_vowel(ch):
    vowels = "aeiou"
    return ch in vowels

def check_first_condition(pwd):
    for character in pwd:
        if is_vowel(character):
            return True
    return False

def check_second_condition(pwd):
    if len(pwd) < 3:
        return True

    vowel_count = 0
    consonant_count = 0

    for index in range(3):
        if is_vowel(pwd[index]):
            vowel_count += 1
        else:
            consonant_count += 1

    if vowel_count >= 3 or consonant_count >= 3:
        return False

    for index in range(3, len(pwd)):
        if is_vowel(pwd[index]):
            vowel_count += 1
        else:
            consonant_count += 1

        if is_vowel(pwd[index - 3]):
            vowel_count -= 1
        else:
            consonant_count -= 1

        if vowel_count >= 3 or consonant_count >= 3:
            return False

    return True

def check_third_condition(pwd):
    for index in range(len(pwd) - 1):
        if pwd[index] == pwd[index + 1]:
            if pwd[index] != 'e' and pwd[index] != 'o':
                return False
    return True

while True:
    pwd = input().strip()
    if pwd == "end":
        break

    is_acceptable = (
        check_first_condition(pwd) and 
        check_second_condition(pwd) and 
        check_third_condition(pwd)
    )

    if is_acceptable:
        print(f"<{pwd}> is acceptable.")
    else:
        print(f"<{pwd}> is not acceptable.")