with open('train.csv', 'r') as inputLine:
    with open('output.csv', 'w') as outputLine:
        for line in inputLine:
            if line[0] != "\"" and line != "\n":
                print(line[:-2], file=outputLine)
