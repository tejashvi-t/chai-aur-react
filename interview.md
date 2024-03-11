<!-- question on counter project  -->

# notes

```bash
- in interview sometimes what happens interview
- gave a problem that is in setcounter project
- in increment fn interviewr setCounter(counter +1 ) many times ands ask the change now


- const addValue = () => {
  setcounter(counter + 1);
  setcounter(counter + 1);
  setcounter(counter + 1);
  setcounter(counter + 1);
  setcounter(counter + 1);
  };


  now as the basics we will fount that in each line or step counters value incrs the value by 1

  but this will not happen
  ex - of prev value of counter is 10 then it result on 11 not on 15
  because of dill algo or react fibre

  and it incrs the value only by one


  now what if we want to change
  in setstate we have a call back function which gives the pervious state of the var
  and in this case we can incrs the value of counter one by one on each line
```
