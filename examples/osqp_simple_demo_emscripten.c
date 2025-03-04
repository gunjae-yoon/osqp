#include "osqp.h"
#include <stdio.h>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
int main_solve(int m, int n, OSQPFloat* P_x, OSQPInt* P_i, OSQPInt* P_p, OSQPInt P_nnz, OSQPFloat* q, OSQPFloat* A_x, OSQPInt* A_i, OSQPInt* A_p, OSQPInt A_nnz, OSQPFloat* l, OSQPFloat* u) {

  /* Exitflag */
  OSQPInt exitflag;

  /* Solver, settings, matrices */
  OSQPSolver*   solver   = NULL;
  OSQPSettings* settings = OSQPSettings_new();
  OSQPCscMatrix* P = OSQPCscMatrix_new(n, n, P_nnz, P_x, P_i, P_p);
  OSQPCscMatrix* A = OSQPCscMatrix_new(m, n, A_nnz, A_x, A_i, A_p);

  if (settings) {
    settings->polishing = 1;
  }

  OSQPInt cap = osqp_capabilities();

  printf("This OSQP library supports:\n");
  if(cap & OSQP_CAPABILITY_DIRECT_SOLVER) {
    printf("    A direct linear algebra solver\n");
  }
  if(cap & OSQP_CAPABILITY_INDIRECT_SOLVER) {
    printf("    An indirect linear algebra solver\n");
  }
  if(cap & OSQP_CAPABILITY_CODEGEN) {
    printf("    Code generation\n");
  }
  if(cap & OSQP_CAPABILITY_DERIVATIVES) {
    printf("    Derivatives calculation\n");
  }
  printf("\n");

  /* Setup solver */
  exitflag = osqp_setup(&solver, P, q, A, l, u, m, n, settings);

  /* Solve problem */
  if (!exitflag) exitflag = osqp_solve(solver);

  /* Cleanup */
  osqp_cleanup(solver);
  OSQPCscMatrix_free(A);
  OSQPCscMatrix_free(P);
  OSQPSettings_free(settings);

  return (int)exitflag;
}
#endif

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
int main(void) {
  return 0;
}
#endif