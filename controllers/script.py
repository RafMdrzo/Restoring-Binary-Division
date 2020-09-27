import sys, json

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])


def add(A, M):
    carry = 0
    Sum = ''

    for i in range (len(A)-1, -1, -1):
        temp = int(A[i]) + int(M[i]) + carry

        if (temp>1):
            Sum += str(temp % 2)
            carry = 1
        else:
            Sum += str(temp)
            carry = 0

    return Sum[::-1]


def compliment(m):
    M = ''

    for i in range (0, len(m)):
        M += str((int(m[i]) + 1) % 2)

    addend = (len(m) - 1) * '0'
    addend = addend + '1'

    M = add(M, addend)
    return M


def restoringDivision(Q, M, A):
    count = len(Q)

    print ('A:', A,
           '\nQ:', Q, '\nM:', M)

    while (count):
        print ('Left Shift and Subtract: ', end = '')
        A = A[1:] + Q[0]
        comp_M = compliment(M)
        A = add(A, comp_M)
        print(' A:', A)
        print('A:', A, ' Q:', Q[1:]+'_', end ='')

        if (A[0] == '1'):
            Q = Q[1:] + '0'
            print ('  -> Unsuccessful')

            A = add(A, M)
            print ('A:', A, ' Q:', Q, ' -> Restoration')

        else:
            Q = Q[1:] + '1'
            print (' -> Successful')
            print ('A:', A, ' Q:',
                   Q, ' -> No Restoration')
        count -= 1

    print ('Quotient(Q):', Q,
           '\nRemainder(A):', A)


if __name__ == '__main__':
    lines = read_in()

    dividend = lines[0]
    divisor = lines[1]

    accumulator = '0' * (len(dividend) + 1)

    restoringDivision(dividend,
                      '0' + divisor,
                      accumulator)
