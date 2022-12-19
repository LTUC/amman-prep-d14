# GitHub Guide:

## At the start of each course: 
1. Clone this repo:
```
git clone git@github.com:LTUC/prep-course.git
```
2. Navigate to it:
```
cd prep-course
```
3. Create an empty repo on [LTUC GitHub](https://github.com/LTUC) and copy its URL.
4. Run this command:
```
bash bin/shell.sh the_url_you_copied
```
5. After you make sure all done:
```
rm -rf bin
git add .
git commit -m "Delete bin folder"
git push origin main
```
## Class Repo naming convention:
- JavaScript: `prep-course-js-01`
- Python: `prep-course-py-01`
- Java: `prep-course-java-01`
- DOTNET: `prep-course-dotnet-01`

> The number for each course should be the next number of the previous prep course course, no matter of the track.
