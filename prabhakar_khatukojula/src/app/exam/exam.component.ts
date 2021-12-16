import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../Services/questions.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private qs: QuestionsService, public route: Router) { }
  questions: {} | any;
  currentPage = 1;

  answers:any = {};

  ngOnInit(): void {
    this.getQuestions();

  }
  onSelect(questions: Question, options: Option) {
    this.answers[questions.id] = options.id
    console.log(this.answers);    
   
    // questions.options.forEach(x => {
    //   if (x.id !== options.id)
    //     x.selected = false;
    // });
    // console.log(questions);
    }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer)
      ? "correct"
      : "wrong";
  }

  getQuestions() {
    this.qs.getQa(this.currentPage).subscribe((res) => {
      this.questions = res;
      // console.log("log:",res.options[0].name)
    })
  }
  public changePage(delta: number): void {
    this.currentPage += delta;
    this.getQuestions();
  }

  onSubmit() {
    console.log("anss",this.answers);
    
    this.qs.postans(this.answers).subscribe((res) => {
      console.log("answersss obj",res);
      this.route.navigate(['/home']);


    })
  }

}
class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean | any;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.questionId = data.questionId;
    this.name = data.name;
    this.isAnswer = data.isAnswer;
  }
}

class Question {
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];
  answered: boolean | any;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.name = data.name;
    this.questionTypeId = data.questionTypeId;
    this.options = [];
    data.options.forEach((o: any) => {
      this.options.push(new Option(o));
    });
  }
}

function data(data: any) {
  throw new Error('Function not implemented.');
}
