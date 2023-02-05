with open('test_output.csv', 'r') as lines:
    for line in lines:
        if line[0] != "\n" and line[0] != "\"":
            print(False)