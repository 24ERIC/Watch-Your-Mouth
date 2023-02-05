i = 0
with open('input.csv', 'r') as inputLine:
    with open('train.csv', 'w') as trainLine:
        with open('validate.csv', 'w') as validateLine:
            for line in inputLine:
                if line == "\n":
                    i = 0
                elif line[0] == "\"" and i <= 5:
                    i += 1
                    print(line[:-2], file=validateLine)
                elif line[0] == "\"" and i > 5:
                    i += 1
                    print(line[:-2], file=trainLine)


