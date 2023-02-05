word = ""
with open('train_set.csv', 'r') as inLines:
    with open('test_output.csv', 'w') as outLines:
        for line in inLines:
            if line.split(" ")[0] == "Examples":
                word = line.split(" ")[2]
                print("\n", file=outLines)
                continue
            if line[0] != "\"" and len(line.split(" ")) <= 1:
                print("\n", file=outLines)
                continue
            if line.split(" ")[1] == "sounding":
                word = line.split(" ")[0] + " " + line.split(" ")[1]
                print("\n", file=outLines)
                continue
            if line.split(" ")[0] == "PLAYFUL":
                word = "PLAYFUL"
                print("\n", file=outLines)
                continue
            if line=="\n":
                continue
            line = line.rstrip('\n') + ' - ' + word
            print(line, file=outLines)