with open('validate.csv', 'r') as inputLine:
    with open('validate_2.csv', 'w') as outputLine:
        for line in inputLine:
            print(line.split(" - ")[0] + ", " +  line.split(" - ")[1][:-2], file=outputLine)