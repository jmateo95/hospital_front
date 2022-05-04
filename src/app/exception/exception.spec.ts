import { HttpErrorResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { ExceptionHandlerApi } from "./exception";

describe('ExceptionHandlerApi', () => {
  let component: ExceptionHandlerApi;

  beforeEach(() => {
    component = TestBed.get(ExceptionHandlerApi);
  });
  it('Error 500', () => {
    const error1 = new HttpErrorResponse({ status: 500 });
    component.errorHandler(error1, "")
  });
  it('Error 0', () => {
    const error1 = new HttpErrorResponse({ status: 0 });
    component.errorHandler(error1, "")
  });
  it('Error message = null', () => {
    const error1 = new HttpErrorResponse({ status: 404 , error: ""});
    component.errorHandler(error1, "")
  });

  it('Error message != null', () => {
    const error1 = new HttpErrorResponse({ status: 404 , error: {message: ""}});
    component.errorHandler(error1, "")
  });



});