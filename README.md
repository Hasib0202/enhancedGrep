# enhancedGrep

## Section 1 — Command Description

enhancedGrep is a simple Node.js command that searches a text file for a word. It displays the lines that contain the word and also shows the number of matching lines.

### How to Run

node enhancedGrep.js <filename> <word>

Example:

node enhancedGrep.js test.txt apple

This command combines the basic ideas of `grep` and `wc`. `grep` is used to search for matching text, and `wc` is used for counting.

## Section 2 — AI-Assisted Programming

I used AI to help me understand Linux commands and how they could be recreated using Node.js. I also asked AI to suggest test cases and possible edge cases for my command.

AI helped me understand how to test the command with a word that exists in the file, a word that does not exist, and missing command-line arguments.

I still had to create and run the command in Codio, test the results, and make sure the output was correct.

One thing AI did not catch automatically was every issue while I was building the program. I had to run the code myself and check the results to make sure everything worked correctly.
